import {replaceElements} from '../utils/common';
import {EditForm} from '../components/edit-form';
import {TripEvent} from '../components/trip-event';

class PointController {
  constructor(container, tripData, onDataChange, onChangeView) {
    this._container = container;
    this._tripData = tripData;


    this._onDataChange = onDataChange;
    this._onChangeView = onChangeView;
  }

  render() {
    const tripData = this._tripData;
    const tripEvent = new TripEvent(this._tripData);
    const editFormTrip = new EditForm(this._tripData);

    const hiddenForm = (event) => {
      if (event.keyCode === 27) {
        replaceElements(this._container, tripEvent.getElement(), editFormTrip.getElement());
        document.removeEventListener(`keydown`, hiddenForm);
      }
    };

    tripEvent.setEditButtonClickHandler(() => {
      replaceElements(this._container, editFormTrip.getElement(), tripEvent.getElement());
      document.addEventListener(`keydown`, hiddenForm);
    });

    editFormTrip.setSubmitHandler(() => {
      replaceElements(this._container, tripEvent.getElement(), editFormTrip.getElement());
      document.removeEventListener(`keydown`, hiddenForm);
    });

    editFormTrip.setToggleFavorite(() => {
      const newTripData = Object.assign({}, tripData);
      if (newTripData.isFavorite) {
        newTripData.isFavorite = false;
      } else {
        newTripData.isFavorite = true;
      }

      this._onDataChange(tripEvent, newTripData);
    });

    this._container.append(tripEvent.getElement());

  }

}

export {PointController};