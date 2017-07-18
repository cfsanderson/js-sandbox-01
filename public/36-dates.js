console.log("Lesson #36: Dates")
// https://youtu.be/zwBMp1U6FII?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5
// https://scrimba.com/casts/coab2-08cb15b8a093

var d1 = new Date()
console.log("1: (in present timezone) = ", d1.toString());
console.log("2: (date only) = ", d1.toDateString());
console.log("3: (time only) = ", d1.toTimeString());
console.log("4: (GMT only) = ", d1.toUTCString());

var d2 = new Date(2017, 1, 3, 42, 43, 23, 23)
console.log("5:", d2.toString());

var d3 = new Date(929397621000)
console.log("6:", d3.toString());

var d4 = new Date("2017-07-17")
console.log("7:", d4.toString());

console.log("8:", d4.getDate());
console.log("9:", d4.getDay());
console.log("10:", d4.getFullYear());
d4.setYear(2020)
console.log("11:", d4.toString());

// many other parameters that you can set/get

var start = new Date();
doSomething();
var end = new Date();
var elapsed = end.getTime() - start.getTime();
console.log("12:", elapsed);

function doSomething() {
  for (var i = 0; i < 100000000; i++) {
    // make the number bigger or smaller to time the loop.
  }
}

// for more info on dates see this MDN page
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
