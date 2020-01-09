
const getDurationTime = (time) => {
  const {timeStart, timeEnd} = time;
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
    min,
    seconds: ((hours * 60) + min) * 60
  };
};

const createTime = () => {
  return {
    timeStart: {
      hours: new Date(Date.now()).getHours(),
      min: new Date(Date.now()).getMinutes()
    },
    timeEnd: {
      hours: new Date(Date.now() + Math.floor(Math.random() * (5 * 60 * 60 * 1000))).getHours(),
      min: new Date(Date.now() + Math.floor(Math.random() * (59 * 60 * 1000))).getMinutes()
    }
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

const clearContainer = (container) => {
  while (container.firstChild) {
    container.firstChild.remove();
  }
};

export {createTime, getDurationTime, randomDate, clearContainer};
