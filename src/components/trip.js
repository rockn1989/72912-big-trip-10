import {createElement} from './utils';

class Trip {
  constructor(eventsData, counter) {
    this._eventsData = eventsData;
    this._counter = counter;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  getTemplate() {
    return `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${++this._counter}</span>
        <time class="day__date" datetime="${this._eventsData.date.toLocaleString()}">${this._eventsData.date.toLocaleString(`ru`, { month: `long` })} ${this._eventsData.date.toLocaleString(`ru`, { day: `numeric` })}</time>
      </div>

      <ul class="trip-events__list"></ul>
    </li>
  `;
  }
}

export {Trip};
