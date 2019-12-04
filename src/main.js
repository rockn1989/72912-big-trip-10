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
const EVENTS_COUNTER = 2;
for(let i = 0; i < EVENTS_COUNTER; i++) {
  eventsArray.push(tripEvent(tripData()));
}


render(`.trip-main__trip-info`, tripInfo(), `afterbegin`);
render(`.trip-main__trip-controls`, menu(), `afterbegin`);
render(`.trip-main__trip-controls`, filter());
render(`.trip-events`, sort());
render(`.trip-events`, editForm());
render(`.trip-events`, tripsList());

new Array(3).fill(``).forEach(() => {
  render(`.trip-days`, trip());
});

[...document.querySelectorAll('.trip-events__list')].forEach((el) => {
  el.insertAdjacentHTML(`beforeend`, eventsArray.join(``));
});