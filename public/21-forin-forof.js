console.log("Lesson #21: for in for of")
// https://youtu.be/a3KHBqH7njs?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

// basic usage
// for (variable in object) {
//   statements
// }
//
// for (variable of object) {
//   statement
// }

let person = { fname: "Caleb", lname: "Sanderson", arms: 2 };


let text = "";
let num = 0;
for (let x in person) {
  text += person[x];
  num++
  console.log(`forin ${num}:`, x);
};
console.log(`${num+1}:`, text);

let arr = [3, 5, 7];
arr.foo = "hello";

// when iterating over arrays "in" returns indexes
for (let i in arr) {
  console.log("forin:", i);
}

// when iterating over arrays "of" returns values
for (let i of arr) {
  console.log("forof:", i);
}
