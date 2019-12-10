const render = (container, component, position = `beforeend`) => {
  document.querySelector(container).insertAdjacentHTML(position, component);
};

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

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export {render, getDurationTime, randomDate};
