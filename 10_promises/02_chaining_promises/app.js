const posts = [
  { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
  { title: 'CSS!', author: 'Chris Coyier', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
  { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
  { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
  { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

function getPostById(id){
  // create the promise
  return new Promise((resolve, reject) => {
    // mimick database hit
    setTimeout(() => {
      // find the post
      const post = posts.find(post => post.id == id);

      if(post){
        resolve(post); // send back the found post
      } else {
        reject(new Error("post not found"));
      }

    }, 500);
  });
}

function addAuthorToPost(post){
  // create the promise
  return new Promise((resolve, reject) => {
    // mimick database hit
    setTimeout(() => {
      // find the author
      const author = authors.find( author => author.name == post.author);

      if(author){
        post.author = author; // add the found author to post
        resolve(post); // send back the post
      } else {
        reject(new Error("author not found"));
      }

    }, 500);
  });
}

getPostById(1)
  .then(post => console.log(post))
  .catch(error => console.error(error));
// {title: "I love JavaScript", author: "Wes Bos", id: 1}

getPostById(-9)
  .then(post => console.log(post))
  .catch(error => console.error(error));
// Error: post not found

getPostById(1)
  .then(post => addAuthorToPost(post))
  .then(post => console.log(post))
  .catch(error => console.error(error));
// {title: "I love JavaScript", id: 1, author: {name: "Wes Bos",...}}
