import {render, RenderPosition} from './components/utils';

import {TripInfo} from './components/trip-info';
import {SiteMenu} from './components/menu';
import {Filter} from './components/filter';
import {Sort} from './components/sort';
import {EditForm} from './components/edit-form';
import {BoardTrips} from './components/board-trips';
import {Trip} from './components/trip';
import {TripEvent} from './components/trip-event';
import {Empty} from './components/no-trip-events';

import {tripData} from './mocks/trip-data';

const eventsArray = [];
const EVENTS_COUNTER = 1;
const DAYS_COUNTER = 3;
const FILTERS = [`Everything`, `Future`, `Past`];
const topMenu = [
  {
    val: `Table`,
    isActive: true
  },
  {
    val: `Stats`,
    isActive: false
  }
];


for (let i = 0; i < EVENTS_COUNTER; i++) {
  eventsArray.push(tripData());
}

const daysDate = [...eventsArray];

const amount = eventsArray.map(({price}) => {
  return price;
});

daysDate.sort((a, b) => {
  return a.date.getTime() - b.date.getTime();
});

const FILTER_DATA = FILTERS.map((filterName) => {
  let filteredVal;
  switch (filterName) {
    case `Future`: filteredVal = eventsArray.filter(({date}) => date.getTime() > Date.now());
      break;
    case `Past`: filteredVal = eventsArray.filter(({date}) => date.getTime() < Date.now());
      break;
    default:
      filteredVal = eventsArray;
      break;
  }
  return {
    title: filterName,
    array: filteredVal
  };
});

if (eventsArray.length > 0) {
  render(`.trip-main__trip-info`, new TripInfo(daysDate).getElement(), RenderPosition.AFTERBEGIN);
  render(`.trip-events`, new Sort().getElement(), RenderPosition.BEFOREEND);
}

render(`.trip-main__trip-controls`, new SiteMenu(topMenu).getElement(), RenderPosition.AFTERBEGIN);
render(`.trip-main__trip-controls`, new Filter(FILTER_DATA).getElement(), RenderPosition.BEFOREEND);
render(`.trip-events`, new BoardTrips().getElement(), RenderPosition.BEFOREEND);


const renderEvent = (eventData) => {
  const eventComponent = new TripEvent(eventData);
  const eventEditComponent = new EditForm(eventData);

  const toggleButton = eventComponent.getElement(`.event__rollup-btn`);
  const editForm = eventEditComponent.getElement(`form`);

  const tripList = document.querySelector(`.trip-events__list`);
  const closeForm = (event) => {
    if (event.keyCode === 27) {
      tripList.replaceChild(eventComponent.getElement(), eventEditComponent.getElement());
      document.removeEventListener(`keydown`, closeForm);
    }
  };

  toggleButton.addEventListener(`click`, () => {
    tripList.replaceChild(eventEditComponent.getElement(), eventComponent.getElement());
    document.addEventListener(`keydown`, closeForm);
  });

  editForm.addEventListener(`submit`, () => {
    tripList.replaceChild(eventComponent.getElement(), eventEditComponent.getElement());
    document.removeEventListener(`keydown`, closeForm);
  });

  render(`.trip-events__list`, eventComponent.getElement(), RenderPosition.BEFOREEND);
};

if (eventsArray.length <= 0) {
  render(`.trip-events`, new Empty().getElement(), RenderPosition.BEFOREEND);
} else {
  new Array(DAYS_COUNTER).fill(``).forEach((el, i) => {
    if (i === 0) {
      render(`.trip-days`, new Trip(daysDate[i], i).getElement(), RenderPosition.BEFOREEND);
      renderEvent(eventsArray[0]);
    }
  });

  document.querySelector(`.trip-info__cost-value`).textContent = amount.length > 0 ? amount.reduce((prev, current) =>{
    return prev + current;
  }) : 0;
}


