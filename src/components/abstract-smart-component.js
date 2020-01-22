import {AbstractComponent} from "./abstract-component";

class AbstractSmartComponent extends AbstractComponent {
  recoveryListeners () {
    throw new Error(`Abstract method not implemented: recoveryListeners`);
  }

  rerender () {
    const oldElement = this.getElement();
    const parent = oldElement.parentElement;

    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, oldElement);
    newElement.classList.add(`rerender`)
    this.recoveryListeners();
  }
}

export {AbstractSmartComponent};
