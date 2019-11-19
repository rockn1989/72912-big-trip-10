const render = (container, component, position = `beforeend`) => {
  document.querySelector(container).insertAdjacentHTML(position, component);
};
