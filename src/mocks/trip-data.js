import {randomDate, createTime, getDurationTime} from '../utils/common';

export const tripData = () => ({
  typeRoutes: [
    `Taxi`,
    `Bus`,
    `Train`,
    `Ship`,
    `Transport`,
    `Drive`,
    `Flight`,
    `Check-in`,
    `Sightseeing`
  ][Math.floor(Math.random() * 9)],
  cities: [
    `Geneva`,
    `Chamonix`,
    `Amsterdam`,
    `New York`,
  ][Math.floor(Math.random() * 4)],
  images: [
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
    `http://picsum.photos/300/150?r=${Math.random()}`,
  ],
  isFavorite: Boolean(Math.round(Math.random() * 1)),
  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`
  ][Math.floor(Math.random() * 3)],
  date: randomDate(),
  time: createTime(),
  duration: getDurationTime(createTime()),
  price: Math.floor(Math.random() * 500),
  offers: [{
    type: `Add`,
    val: `luggage`,
    price: `${Math.floor(Math.random() * 10)}`,
    isChecked: Boolean(Math.round(Math.random() * 1))
  },
  {
    type: `Add`,
    val: `meal`,
    price: `${Math.floor(Math.random() * 20)}`,
    isChecked: Boolean(Math.round(Math.random() * 1))
  },
  {
    type: `Switch`,
    val: `to comfort class`,
    price: `${Math.floor(Math.random() * 200)}`,
    isChecked: Boolean(Math.round(Math.random() * 1))
  },
  {
    type: `Choose`,
    val: `seats`,
    price: `${Math.floor(Math.random() * 30)}`,
    isChecked: Boolean(Math.round(Math.random() * 1))
  }]
});
