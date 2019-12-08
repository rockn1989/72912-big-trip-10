const render = (container, component, position = `beforeend`) => {
  document.querySelector(container).insertAdjacentHTML(position, component);
};

const getTime = () => {
  let hoursStart = Math.floor(Math.random() * 24);
  let minutesStart = Math.floor(Math.random() * 60);

  hoursStart = hoursStart >= 10 ? hoursStart : `${`0` + hoursStart}`;
  minutesStart = minutesStart >= 10 ? minutesStart : `${`0` + minutesStart}`;

  let hoursEnd = parseInt(hoursStart, 10) + Math.floor(Math.random() * (24 - parseInt(hoursStart, 10)));
  hoursEnd = hoursEnd >= 10 ? hoursEnd : `${`0` + hoursEnd}`;

  let minutesEnd = parseInt(minutesStart, 10) + Math.floor(Math.random() * (60 - parseInt(minutesStart, 10)));
  minutesEnd = minutesEnd >= 10 ? minutesEnd : `${`0` + minutesEnd}`;

/*   let travelTime = (((parseInt(hoursEnd, 10) * 60) + minutesEnd) - ((parseInt(hoursStart, 10) * 60) + minutesStart)) * ( 60 * 1000 );
  let difference = {
    hours: Math.floor(travelTime / (1000 * 60 * 60)),
    minutes: Math.floor(travelTime / (1000 * 60 * 60 * 24))
  }; */
  return {
    hoursStart,
    hoursEnd,
    minutesStart,
    minutesEnd
  }
};

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export {render, getTime, randomDate};