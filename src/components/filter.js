export const filter = (dataFilters) => {
  return `<form class="trip-filters" action="#" method="get">
  ${dataFilters.map(({title}) => {
    return `<div class="trip-filters__filter">
      <input id="filter-${title}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${title.toLowerCase()}" ${title.toLowerCase() === `everything` ? `checked` : ``}>
        <label class="trip-filters__filter-label" for="filter-${title}">${title}</label>
      </div>`;
  }).join(``)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  `;
};
