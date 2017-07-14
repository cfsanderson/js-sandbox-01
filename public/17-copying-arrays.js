console.log("Lesson #17: Copying Arrays (Deep and Shallow)")
// https://youtu.be/EeZBKv34mm4?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

var original = [true, true, undefined, false, null];

// slice
var copy1 = original.slice(0);

// spread Operator
var copy2 = [...original];
console.log("1:", copy1, copy2);
// spread operator will not work when you have an array or and object IN your array.

// when ^ use DEEP Copying
var deepArray = [["freeCodeCamp"]];
var shallowCopy = deepArray.slice(0);

// shallowCopy[0].push("is great");
// console.log("2:", deepArray[0], shallowCopy[0]);

var deepCopy = JSON.parse(JSON.stringify(deepArray));

deepCopy[0].push("is great");
console.log("3:", deepArray[0], deepCopy[0]);
