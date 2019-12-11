import {randomDate} from './utils';

const date = randomDate();
const month = date.toLocaleString(`en`, {month: `long`});
const day = date.getDay();
console.log(date.toLocaleString(), date.getDay())
export const trip = (dayData, counter) => {
/*   console.log(dayData)
  const days = dayData.map(({date}) => {
    return date;
  });
  console.log(days)
  const {date} = dayData;
  console.log(date) */
  return `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${++counter}</span>
        <time class="day__date" datetime="${date.toLocaleString()}">${date.toLocaleString(`ru`, {month: `long`})} ${date.getDay()}</time>
      </div>

      <ul class="trip-events__list"></ul>
    </li>
  `;
};
