import {getDurationTime} from './utils';


export const tripEvent = (data) => {
  const {
    typeRoutes,
    cities,
    date,
    time,
    price,
    offers
  } = data;

  const duration = getDurationTime(time.timeStart, time.timeEnd);
  const checkedOffers = offers.filter(({isChecked}) => isChecked);

  return `<li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${typeRoutes.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${typeRoutes} to ${cities}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${date}">${time.timeStart.hours + `:` + (time.timeStart.min > 10 ? time.timeStart.min : `0` + time.timeStart.min)}</time>
          &mdash;
          <time class="event__end-time" datetime="${date}">${time.timeEnd.hours + `:` + (time.timeEnd.min > 10 ? time.timeEnd.min : `0` + time.timeEnd.min)}</time>
        </p>
        <p class="event__duration"> ${duration.hours + `H ` + duration.min + `M`}</p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>

      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${checkedOffers.slice(0, Math.floor(Math.random() * 3)).map((offer) => {
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
};
