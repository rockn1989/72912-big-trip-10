export const tripEvent = (data) => {
  const {
    typeRoutes,
    cities,
    images,
    description,
    date,
    time,
    price,
    offers
  } = data;

  return `<li class="trip-events__item">
          <div class="event">
            <div class="event__type">
              <img class="event__type-icon" width="42" height="42" src="img/icons/${typeRoutes.toLowerCase()}.png" alt="Event type icon">
            </div>
            <h3 class="event__title">${typeRoutes} to ${cities}</h3>

            <div class="event__schedule">
              <p class="event__time">
                <time class="event__start-time" datetime="${date.toLocaleString()}">${time.start.hours}:${time.start.min}</time>
                &mdash;
                <time class="event__end-time" datetime="${date.toLocaleString()}">${time.end.hours}:${time.end.min}</time>
              </p>
              <p class="event__duration">1H 30M</p>
            </div>

            <p class="event__price">
              &euro;&nbsp;<span class="event__price-value">${price}</span>
            </p>

            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
            ${new Array(Math.round(Math.random() * 2)).fill(``).map(() => {
              return `<li class="event__offer">
                <span class="event__offer-title">${offers.type[Math.floor(Math.random() * 3)]} ${offers.val[Math.floor(Math.random() * 4)]}</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">${offers.price}</span>
              </li>`;
            }).join(``)}

            </ul>

            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          </div>
        </li>`;
};