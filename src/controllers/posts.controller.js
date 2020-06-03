import view from '../views/posts.html';

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await res.json();
};

export default async () => {
  const element = document.createElement('div');
  element.innerHTML = view;

  const postsElement = element.querySelector('#posts');
  let totalPost = element.querySelector('#totalPost');

  const allPosts = await getPosts();
  totalPost.innerHTML = allPosts.length;

  allPosts.forEach( post => {
    postsElement.innerHTML += `
          <div class="col-md-6 col-lg-4 col-xl-3">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <p><a href="#" target="_blank" class="btn btn-success">Read More &raquo;</a></p>
          </div>
    `;
  });
  
  console.log(allPosts);
  return element;
};