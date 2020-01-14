import {replaceElements} from '../utils/common';
import {EditForm} from '../components/edit-form';
import {TripEvent} from '../components/trip-event';

class PointController {
  constructor(container, tripData, onDataChange, onChangeView) {
    this._container = container;
    this._tripData = tripData;
    this._trip = new TripEvent(this._tripData);

    this._onDataChange = onDataChange;
    this._onChangeView = onChangeView;
  }

  render() {
    const editFormTrip = new EditForm(this._tripData);
    const tripList = tripDay.getElement().querySelector(`.trip-events__list`);

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

}