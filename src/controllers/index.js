import home from './home.controller';
import posts from './posts.controller';
import notFound  from './404.controller';
import about from './about.controller';

const pages = {
  home: home,
  posts: posts,
  about: about,
  notFound: notFound

}

export {pages};