import {clearContainer, replaceElements} from '../utils/common';
import {EditForm} from '../components/edit-form';
import {Trip} from '../components/trip';
import {TripEvent} from '../components/trip-event';
import {Empty} from '../components/no-trip-events';
import {Sort} from '../components/sort';

import {PointController} from '../controllers/point-controller';

class TripController {
  constructor(container, tripData) {
    this._container = container;
    this._tripData = tripData;
    this._noEvents = new Empty();

    this._sort = new Sort();
  }

  _onDataChange(oldVal, newVal) {
    //console.log(oldVal, newVal);
  }

  _renderSort() {
    const sortContainer = document.querySelector(`.trip-events`);
    sortContainer.prepend(this._sort.getElement());

    this._sort.setChangeHandler((type) => {
      const newArray = this._sortEvents(type);
      clearContainer(this._container);
      this._renderTrip(newArray);
    });
  }

  _sortEvents(type) {
    const sortedDays = [...this._tripData];
    let sortedArray;
    switch (type) {
      case `time`: sortedArray = sortedDays.sort((a, b) => b.duration.seconds - a.duration.seconds);
        break;
      case `price`: sortedArray = sortedDays.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedArray = sortedDays.sort((a, b) => a.date.getTime() - b.date.getTime());
        break;
    }

    return sortedArray;
  }

  _createTrip(tripMock, i) {
    const tripDay = new Trip(tripMock, i);
    const tripList = tripDay.getElement().querySelector(`.trip-events__list`);
    const pointController = new PointController(tripList, tripMock, this._onDataChange);
    console.log();
    /*
    const tripEvent = new TripEvent(tripMock);
    const editFormTrip = new EditForm(tripMock);


    const hiddenForm = (event) => {
      if (event.keyCode === 27) {
        replaceElements(tripList, tripEvent.getElement(), editFormTrip.getElement());
        document.removeEventListener(`keydown`, hiddenForm);
      }
    };

    tripEvent.setEditButtonClickHandler(() => {
      replaceElements(tripList, editFormTrip.getElement(), tripEvent.getElement());
      document.addEventListener(`keydown`, hiddenForm);
    });

    editFormTrip.setSubmitHandler(() => {
      replaceElements(tripList, tripEvent.getElement(), editFormTrip.getElement());
      document.removeEventListener(`keydown`, hiddenForm);
    });

    tripList.append(tripEvent.getElement());
    */
    this._container.append(tripDay.getElement());
    pointController.render();

  }

  _renderTrip(tripsData) {
    tripsData.map((trip, i) => {
      this._createTrip(trip, i);
    });
  }

  getTotalPrice() {
    const priceBlock = document.querySelector(`.trip-info__cost-value`);
    if (this._tripData.length >= 1) {
      priceBlock.textContent = this._tripData
        .map(({price}) => {
          return price;
        })
        .reduce((prev, current) => {
          return prev + current;
        });
    }
  }

  render() {
    if (this._tripData.length <= 0) {
      document.querySelector(`.trip-events`).append(this._noEvents.getElement());
    } else {
      const sortedTrips = this._sortEvents();
      this._renderSort();
      this._renderTrip(sortedTrips);
    }
  }
}

export {TripController};
