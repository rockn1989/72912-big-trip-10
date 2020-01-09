import {AbstractComponent} from './abstract-component';

class SiteMenu extends AbstractComponent {
  constructor(links) {
    super();
    this._links = links;
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
