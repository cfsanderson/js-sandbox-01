console.log("Lesson #27: Closures")
// https://youtu.be/1JsJx1x35c0?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

/*
A closure is the combination of a function and the environment in which that function was declared.
The environment consists of any local variables that were in scope when the function was created.
In JS ALL functions make closures.
*/

function makeFunc() {
  var name = "JS Nuggets";
  function displayName() {
    console.log("1:", name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

/*
A closure lets you associate some data (the environment) with a function that operates on that data.
One way to use a closure is to emulate private methods which can only be called by other methods in the same class. JS does not have a native way to do this, but it it possible to emulate it with closures.
*/

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log("2:", counter.value());
counter.increment();
counter.increment();
console.log("3:", counter.value());
counter.decrement();
console.log("4:", counter.value());
