import {randomDate} from './utils';

const date = randomDate();
const month = date.toLocaleString(`en`, {month: `long`});
const day = date.getDay();

export const trip = (eventsData, counter) => {
  return `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${++counter}</span>
        <time class="day__date" datetime="${eventsData.date.toLocaleString()}">${eventsData.date.toLocaleString(`ru`, { month: `long` })} ${eventsData.date.toLocaleString(`ru`, { day: `numeric` })}</time>
      </div>

      <ul class="trip-events__list"></ul>
    </li>
  `;
};
