import {render} from './components/utils';

import {tripInfo} from './components/trip-info';
import {menu} from './components/menu';
import {filter} from './components/filter';
import {sort} from './components/sort';
import {editForm} from './components/edit-form';
import {tripsList} from './components/trips-list';
import {trip} from './components/trip';
import {tripEvent} from './components/trip-event';

import {tripData} from './mocks/trip-data';

const eventsArray = [];
const EVENTS_COUNTER = 4;
const DAYS_COUNTER = 3;
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
const FILTERS = [`Everything`, `Future`, `Past`];

for (let i = 0; i < EVENTS_COUNTER; i++) {
  eventsArray.push(tripData());
}

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

render(`.trip-main__trip-info`, tripInfo(), `afterbegin`);
render(`.trip-main__trip-controls`, menu(topMenu), `afterbegin`);
render(`.trip-main__trip-controls`, filter(FILTER_DATA));
render(`.trip-events`, sort());
render(`.trip-events`, editForm());
render(`.trip-events`, tripsList());

new Array(DAYS_COUNTER).fill(``).forEach((el, i) => {
  render(`.trip-days`, trip(eventsArray[i], i));
});


[...document.querySelectorAll(`.trip-events__list`)].forEach((el) => {
  eventsArray.map((event) => {
    el.insertAdjacentHTML(`beforeend`, tripEvent(event));
  });
});
