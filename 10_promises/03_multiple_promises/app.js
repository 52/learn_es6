const weather = new Promise((resolve => {
  setTimeout(() => {
    resolve({temp: 29, codition: "Cloudy"});
  },1000);
}));

const tweets = new Promise((resolve => {
  setTimeout(() => {
    resolve(["Nice weather!", "Good day!"]);
  },500);
}));

Promise.all([weather, tweets])
  .then(response => {
    [weatherInfo, tweetsInfo] = response;
    console.log(weatherInfo);
    console.log(tweetsInfo);
  });


// ----

const post = fetch("https://jsonplaceholder.typicode.com/posts/1");
const comments = fetch("https://jsonplaceholder.typicode.com/posts/1/comments");

Promise
  .all([post, comments])
  .then(responses => {
    return Promise.all(responses.map(res => res.json()));
  })
  .then(responses => {
    const [postInfo, commentsInfo] = responses;
    console.log(postInfo);
    console.log(commentsInfo);
  });
