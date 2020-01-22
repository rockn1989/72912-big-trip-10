import {render, RenderPosition} from './utils/render';
import {TripInfo} from './components/trip-info';
import {SiteMenu} from './components/menu';
import {Filter} from './components/filter';
import {BoardTrips} from './components/board-trips';
import {tripData} from './mocks/trip-data';
import {TripController} from './controllers/trip-controller';

const eventsArray = [];
const EVENTS_COUNTER = 8;
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
  eventsArray.push(tripData(i));
}

const sortedDays = [...eventsArray];

sortedDays.sort((a, b) => {
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
  render(document.querySelector(`.trip-main__trip-info`), new TripInfo(sortedDays), RenderPosition.AFTERBEGIN);
}

render(document.querySelector(`.trip-main__trip-controls`), new SiteMenu(topMenu), RenderPosition.AFTERBEGIN);
render(document.querySelector(`.trip-main__trip-controls`), new Filter(FILTER_DATA), RenderPosition.BEFOREEND);

const boardTrips = new BoardTrips();
render(document.querySelector(`.trip-events`), boardTrips, RenderPosition.BEFOREEND);

const tripController = new TripController(boardTrips.getElement(), eventsArray);

tripController.render();
tripController.getTotalPrice();
