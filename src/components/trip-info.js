export const tripInfo = (info) => {
  return `<div class="trip-info__main">
      <h1 class="trip-info__title">${info[0].cities} &mdash; ... &mdash; ${info[info.length - 1].cities}</h1>

      <p class="trip-info__dates">${info[0].date.toLocaleString(`ru`, {month: `long`})} ${info[0].date.toLocaleString(`ru`, {day: `numeric`})}&nbsp;&mdash;&nbsp; ${info[info.length - 1].date.toLocaleString(`ru`, {day: `numeric`})}</p>
    </div>
  `;
};
