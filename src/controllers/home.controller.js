import view from '../views/home.html';

export default () => {
  const element = document.createElement('div');
  element.innerHTML = view;

  return element;
};