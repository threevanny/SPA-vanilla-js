import view from '../views/about.html';

export default () => {
  const element = document.createElement('div');
  element.innerHTML = view;

  return element;
};