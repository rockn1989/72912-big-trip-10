import {EditForm} from '../components/edit-form';
import {Trip} from '../components/trip';
import {TripEvent} from '../components/trip-event';
import {Empty} from '../components/no-trip-events';

class TripController {
  constructor(container, tripData) {
    this._container = container;
    this._tripData = tripData;
    this._noEvents = new Empty();
  }

  _sortDaysToDate() {
    const sortedDays = [...this._tripData];

    sortedDays.sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    });

    return sortedDays;
  }

  _renderTrip(tripMock, i) {
    const tripDay = new Trip(tripMock, i);
    const tripEvent = new TripEvent(tripMock);
    const editFormTrip = new EditForm(tripMock);
    const tripList = tripDay.getElement().querySelector(`.trip-events__list`);

    const replaceElements = (container, newElement, oldElement) => {
      container.replaceChild(newElement, oldElement);
    };

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

    this._container.append(tripDay.getElement());
    tripList.append(tripEvent.getElement());

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
    const sortedTrips = this._sortDaysToDate();

    if (this._tripData.length <= 0) {
      document.querySelector(`.trip-events`).append(this._noEvents.getElement());
    } else {
      sortedTrips.map((trip, i) => {
        this._renderTrip(trip, i);
      });
    }
  }
}

export {TripController};
