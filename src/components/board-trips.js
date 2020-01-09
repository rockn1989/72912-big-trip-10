import {AbstractComponent} from './abstract-component';

class BoardTrips extends AbstractComponent {
  getTemplate() {
    return `<ul class="trip-days"></ul>`;
  }
}

export {BoardTrips};
