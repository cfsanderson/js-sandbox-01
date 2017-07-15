console.log("Lesson 22: Array Iteration - 8 Methods")
// https://youtu.be/Urwzk6ILvPQ?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

// forEach
// alters the existing array and performs a given function on each item in the array.
let arr = [1,2,3]
arr.forEach(function (item, index) {
  console.log("forEach:", item, index);
});


// map
// like forEach but returns a NEW array
const three = [1,2,3];
const doubled = three.map(function (item) {
  return item *2;
})
console.log("map:", doubled);


// filter
// filters with given params and returns a new array
const ints = [1,2,3];
const evens = ints.filter(function (item) {
  return item % 2 === 0;
})
console.log("filter:", evens);


// reduce
const sum = [1,2,3].reduce(function (result, item) {
  return result + item;
}, 0);
console.log("reduce:", sum);


// some
const hasNegativeNumbers = [1,2,3,-1,4].some(function (item) {
  return item < 0;
});
console.log("some:", hasNegativeNumbers);


// every
const allPositiveNumbers = [1,2,-3].every(function (item) {
  return item > 0;
})
console.log("every:", allPositiveNumbers);


// find
const objects = [{ id: "a" }, { id: "b" }, { id: "c" }];
const found = objects.find(function (item) {
  return item.id === "b";
});
console.log("find:", found);


// find index
const objects2 = [{ id: "a" }, { id: "b" }, { id: "c" }];
const foundIndex = objects2.findIndex(function (item) {
  return item.id === "b";
});
console.log("findIndex:", foundIndex);
