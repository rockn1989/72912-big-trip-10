const getDurationTime = (timeStart, timeEnd) => {
  const ONE_HOUR = 60;
  const ONE_DAY_HOURS = 24;
  let hours;
  let min;

  if ((timeEnd.hours - timeStart.hours) >= 0) {
    hours = timeEnd.hours - timeStart.hours;
  } else {
    hours = ONE_DAY_HOURS - Math.abs(timeEnd.hours - timeStart.hours);
  }

  if ((timeEnd.min - timeStart.min) >= 0) {
    min = timeEnd.min - timeStart.min;
  } else {
    min = ONE_HOUR - (Math.abs(timeEnd.min - timeStart.min));
    hours = (hours - 1) < 0 ? (ONE_DAY_HOURS - 1) : hours - 1;
  }

  return {
    hours,
    min
  };
};

const randomDate = () => {
  let factor = Boolean(Math.round(Math.random() * 1));
  let date;
  if (factor) {
    date = Date.now() + Math.floor(Math.random() * 10) * 24 * 60 * 60 * 1000 * 1;
  } else {
    date = Date.now() + Math.floor(Math.random() * 10) * 24 * 60 * 60 * 1000 * (-1);
  }
  return new Date(date);
};

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, element, place) => {
  const containerHTML = document.querySelector(container);
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      containerHTML.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      containerHTML.append(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export {render, getDurationTime, randomDate, createElement, RenderPosition};
