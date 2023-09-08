// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// fetch("https://jsonplaceholder.typicode.com/todos/2")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// fetch("https://jsonplaceholder.typicode.com/todos/3")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const promise1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
const promise2 = fetch("https://jsonplaceholder.typicode.com/todos/2");
const promise3 = fetch("https://jsonplaceholder.typicode.com/todos/3");

const promiseList = [promise1, promise2, promise3];

Promise.all(promiseList).then((response) => response.json());
