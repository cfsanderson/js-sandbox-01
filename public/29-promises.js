console.log("Lesson #29: Promises")
// https://youtu.be/IGYxfTTpoFg?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

/*
A promise is a proxy or placeholder for a value that you may not know when the promise is created.
You do not know when an asynchronous method is going to finish in your program so promises allow you to do something when it does finish.
A pending promise can be fulfilled with a value or rejected with a reason or error.
Promises can be created with 'new Promise' or with the fetch API.
*/

// Basic usage:
var p = new Promise(function(resolve, reject) {
  // Do an async task and then...

  if (good_condtion) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});

p.then(function() {
  // do something with the result
}).catch(function() {
  // error
})


// Example
var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++promiseCount;
  console.log('Promise #' + thisPromiseCount + ': Started - Sync code started');

  var p1 = new Promise(function(resolve, reject) {
    console.log('Promise #' + thisPromiseCount + ': Promise started - Async code started');

    // Setting window.timeout to a random amout of time simulates asynchronism
    window.setTimeout(
      function() {
        resolve('Promise #' + thisPromiseCount);
      }, Math.random() * 2000 + 1000);
  });

  // once the "p1" promise resolves it runs the '.then' function
  p1.then(function(val) {
    console.log(val + ': Promise fulfilled - Async code terminated');
  }).catch(function(reason) {
    console.log('Handle rejected promise ('+reason+') here.');
  });

  console.log('Promise #' + thisPromiseCount + ': Promise made - Sync code terminated');
}

testPromise();
testPromise();
testPromise();
