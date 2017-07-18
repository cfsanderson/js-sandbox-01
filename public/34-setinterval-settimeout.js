console.log("Lesson #34: setInterval and setTimeout - Timing Events")
// https://youtu.be/kOcFZV3c75I?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

// setTimeout
var timeoutID = setTimeout(bye, 3000);

console.log("1:", 'hello');

// Uncomment 'clearTimeout' below to stop the timeout from running.
// clearTimeout(timeoutID);

function bye() {
  console.log("2:", 'goodbye');
}


// setInterval
// is similar to setTimeout but the program will execute continuously every interval that is set.

var count = 0;
var intId = setInterval(counter, 1000);

function counter() {
  console.log(++count);
}
