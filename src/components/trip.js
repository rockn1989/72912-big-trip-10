import {AbstractComponent} from './abstract-component';

class Trip extends AbstractComponent {
  constructor(eventsData, counter) {
    super();
    this._eventsData = eventsData;
    this._counter = counter;
  }

  getTemplate() {
    return `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${++this._counter}</span>
        <time class="day__date" datetime="${this._eventsData.date.toLocaleString()}">${this._eventsData.date.toLocaleString(`ru`, {month: `long`})} ${this._eventsData.date.toLocaleString(`ru`, {day: `numeric`})}</time>
      </div>

      <ul class="trip-events__list"></ul>
    </li>
  `;
  }
}

export {Trip};
