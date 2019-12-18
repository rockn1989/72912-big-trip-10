import {render, render2, RenderPosition} from './components/utils';

import {TripInfo} from './components/trip-info';
import {SiteMenu} from './components/menu';
import {Filter} from './components/filter';
import {Sort} from './components/sort';
import {editForm} from './components/edit-form';
import {TripList} from './components/trips-list';
import {Trip} from './components/trip';
import {tripEvent} from './components/trip-event';

import {tripData} from './mocks/trip-data';

const eventsArray = [];
const EVENTS_COUNTER = 4;
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

let amount = 0;

eventsArray.forEach((el) => {
  amount += el.price;
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

render2(`.trip-main__trip-info`, new TripInfo(daysDate).getElement(), RenderPosition.AFTERBEGIN);
render2(`.trip-main__trip-controls`, new SiteMenu(topMenu).getElement(), RenderPosition.AFTERBEGIN);
render2(`.trip-main__trip-controls`, new Filter(FILTER_DATA).getElement(), RenderPosition.BEFOREEND);
render2(`.trip-events`, new Sort().getElement(), RenderPosition.BEFOREEND);

render2(`.trip-events`, new TripList().getElement(), RenderPosition.BEFOREEND);

new Array(DAYS_COUNTER).fill(``).forEach((el, i) => {
  render2(`.trip-days`, new Trip(daysDate[i], i).getElement(), RenderPosition.BEFOREEND);
});

document.querySelector(`.trip-info__cost-value`).textContent = amount;

[...document.querySelectorAll(`.trip-events__list`)].forEach((el, j) => {
  eventsArray.map((event, i) => {
    if (j === 0 && i === 0) {
      el.insertAdjacentHTML(`beforeend`, editForm(event));
    } else {
      el.insertAdjacentHTML(`beforeend`, tripEvent(event));
    }
  });
});
