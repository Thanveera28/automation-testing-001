/*
THEORY - Task 3: Asynchronous JavaScript

1. CALLBACK:
   A function passed as argument to another function, called after async task completes.
   Problem: Leads to Callback Hell (nested callbacks).

2. PROMISE - 3 States:
   a) Pending - Initial state, operation not completed
   b) Fulfilled - Operation completed successfully
   c) Rejected - Operation failed

3. ASYNC/AWAIT:
   async makes a function return a Promise.
   await waits for Promise to settle.
   Makes async code look like sync code.

4. ADVANTAGE:
   Avoids Callback Hell, cleaner code, easy error handling with try/catch, more readable.
*/






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