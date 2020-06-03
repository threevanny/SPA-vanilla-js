import { pages } from '../controllers/index';

let content = document.getElementById('main');

const router = async (route) => {
  content.innerHTML = '';
  switch (route) {
    case '':
      main.appendChild(pages.home());
      break;
    case '#/':
      main.appendChild(pages.home());
      break;
    case '#/post':
      main.appendChild(await pages.posts());
      break
    case '#/about':
      main.appendChild(pages.about());
      break;
    default:
      main.appendChild(pages.notFound());
      break;
  }
}

export { router }