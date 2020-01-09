import {AbstractComponent} from './abstract-component';

class TripInfo extends AbstractComponent {
  constructor(cities) {
    super();
    this._firstCity = cities[0].cities;
    this._secondCity = cities[cities.length - 1].cities;
    this._month = cities[0].date.toLocaleString(`ru`, {month: `long`});
    this._dayStart = cities[0].date.toLocaleString(`ru`, {day: `numeric`});
    this._dayEnd = cities[cities.length - 1].date.toLocaleString(`ru`, {day: `numeric`});
    this._element = null;
  }

  getTemplate() {
    return `<div class="trip-info__main">
      <h1 class="trip-info__title">${this._firstCity} &mdash; ... &mdash; ${this._secondCity}</h1>
      <p class="trip-info__dates">${this._month} ${this._dayStart}&nbsp;&mdash;&nbsp; ${this._dayEnd}</p>
    </div>
  `;
  }
}

export {TripInfo};
