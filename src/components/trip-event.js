import {getDurationTime, createElement} from './utils';

class TripEvent {
  constructor({typeRoutes, cities, time, price, offers}) {
    this._typeRoutes = typeRoutes;
    this._cities = cities;
    this._time = time;
    this._price = price;
    this._offers = offers;

    this._duration = getDurationTime(this._time.timeStart, this._time.timeEnd);
    this._checkedOffers = this._offers.filter(({isChecked}) => isChecked);
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
    return `<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${this._typeRoutes.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${this._typeRoutes} to ${this._cities}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${this._date}">${this._time.timeStart.hours + `:` + (this._time.timeStart.min > 10 ? this._time.timeStart.min : `0` + this._time.timeStart.min)}</time>
          &mdash;
          <time class="event__end-time" datetime="${this._date}">${this._time.timeEnd.hours + `:` + (this._time.timeEnd.min > 10 ? this._time.timeEnd.min : `0` + this._time.timeEnd.min)}</time>
        </p>
        <p class="event__duration"> ${this._duration.hours + `H ` + this._duration.min + `M`}</p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${this._price}</span>
      </p>

      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${this._checkedOffers.slice(0, Math.floor(Math.random() * 3)).map((offer) => {
    return `<li class="event__offer">
          <span class="event__offer-title">${offer.type} ${offer.val}</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
        </li>`;
  }).join(``)}

      </ul>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
  }
}

export {TripEvent};
