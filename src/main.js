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

render(`.trip-main__trip-info`, tripInfo(daysDate), `afterbegin`);
render(`.trip-main__trip-controls`, menu(topMenu), `afterbegin`);
render(`.trip-main__trip-controls`, filter(FILTER_DATA));
render(`.trip-events`, sort());

render(`.trip-events`, tripsList());

new Array(DAYS_COUNTER).fill(``).forEach((el, i) => {
  render(`.trip-days`, trip(daysDate[i], i));
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
