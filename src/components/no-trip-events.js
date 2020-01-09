import {AbstractComponent} from './abstract-component';

class Empty extends AbstractComponent {
  getTemplate() {
    return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
  }
}

export {Empty};


