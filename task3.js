

//call back
function fetchData(cb) {
  setTimeout(() => cb("Callback: Data received"), 1000);
}
fetchData(d => console.log(d));

// Promise - 3 states: Pending, Fulfilled, Rejected
let p = new Promise((resolve, reject) => {
  resolve("Promise: Fulfilled");
});
p.then(r => console.log(r));

// Async/Await
async function getData() {
  let res = await p;
  console.log("Async/Await: " + res);
}
getData();

console.log("Advantage: No Callback Hell, Clean Code");