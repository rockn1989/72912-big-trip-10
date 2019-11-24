import {tripInfo} from './components/trip-info';
import {menu} from './components/menu';
import {filter} from './components/filter';
import {sort} from './components/sort';
import {editForm} from './components/edit-form';
import {card} from './components/card';
import {tripsList} from './components/trips-list';

const render = (container, component, position = `beforeend`) => {
  document.querySelector(container).insertAdjacentHTML(position, component);
};

render(`.trip-main__trip-info`, tripInfo(), `beforebegin`);
render(`.trip-main__trip-controls`, menu(), `afterbegin`);
render(`.trip-main__trip-controls`, filter());
render(`.trip-events`, sort());
render(`.trip-events`, editForm());
render(`.trip-events`, tripsList());

new Array(3).fill(``).forEach(() => {
  render(`.trip-days`, card());
});
