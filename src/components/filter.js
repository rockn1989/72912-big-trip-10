import {AbstractComponent} from './abstract-component';

class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return `<form class="trip-filters" action="#" method="get">
  ${this._filters.map(({title}) => {
    return `<div class="trip-filters__filter">
      <input id="filter-${title}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${title.toLowerCase()}" ${title.toLowerCase() === `everything` ? `checked` : ``}>
        <label class="trip-filters__filter-label" for="filter-${title}">${title}</label>
      </div>`;
  }).join(``)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;
  }
}

export {Filter};
