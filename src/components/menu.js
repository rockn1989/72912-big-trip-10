export const menu = (data) => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
  ${data.map((el) => {
    return `<a class="trip-tabs__btn${el.isActive ? ` trip-tabs__btn--active` : ``}" href="#">${el.val}</a>`;
  }).join(``)}
  </nav>
  `;
};
