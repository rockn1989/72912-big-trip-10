export const tripData = () => ({
  typeRoutes: [
    `Taxi`,
    `Bus`,
    `Train`,
    `Ship`,
    `Transport`,
    `Drive`,
    `Flight`,
    `Check`,
    `Sightseeing`
  ],
  cities: [
    `Geneva`,
    `Chamonix`,
    `Amsterdam`,
    `New York`,
  ],
  images: `http://picsum.photos/300/150?r=${Math.random()}`,
  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`
  ].slice(0, Math.floor(Math.random() * 2)),
  price: Math.floor(Math.random() * 500),
  offers: [
    `Add luggage +10 €`,
    `Switch to comfort class +150 €`,
    `Add meal +2 €`,
    `Choose seats +9 €`
  ].slice(0, Math.floor(Math.random() * 2)),
});
