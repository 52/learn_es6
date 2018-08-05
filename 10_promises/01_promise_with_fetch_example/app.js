//-- Consume a promise
const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts');

console.log(postsPromise);

postsPromise
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(error => {
    console.error(error);
  });
//----

//-- Create a promise
const promise = new  Promise((resolve, reject) => {
  // Mimick the delay
  setTimeout(() => {

    resolve("Successfully processed.");

    // reject(new Error("Failed!"));

  }, 1000);
});

promise
  .then(data => console.log(data))
  .catch(error => console.error(error));
//----
