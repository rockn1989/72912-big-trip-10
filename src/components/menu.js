import {createElement} from './utils';

class SiteMenu {
  constructor(links) {
    this._links = links;
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
    return `<nav class="trip-controls__trip-tabs  trip-tabs">
    ${this._links.map((el) => {
    return `<a class="trip-tabs__btn${el.isActive ? ` trip-tabs__btn--active` : ``}" href="#">${el.val}</a>`;
  }).join(``)}
    </nav>
    `;
  }
}

export {SiteMenu};
