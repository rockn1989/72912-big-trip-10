import {getTime, randomDate} from '../components/utils';

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
  images: `http://picsum.photos/300/150?r=${Math.random()}`,
  isFavorite: Boolean(Math.round(Math.random() * 1)),
  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`
  ].slice(0, Math.floor(Math.random() * 2)),
  date: randomDate(),
  time: Date.now(),
  price: Math.floor(Math.random() * 500),
  offers: {
    type: [`Add`, `Switch`, `Choose`],
    val: [`luggage`, `to comfort class`, `meal`, `seats`],
    price: `${Math.floor(Math.random() * 200)}`
  }
});
