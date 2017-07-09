// #4 String Basics
// https://youtu.be/Vd_Z1bYGrCM?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

let string1 = "The cow jumped over the moon.";
let string2 = "The moon jumped over the cow??!";
console.log(string1);
console.log(string2);

let splitSort = string2.split('').sort();
for (let i = 0; i < splitSort.length; i++) {
  if (splitSort[i] === /\W/g) {
    splitSort.splice(i, 1)
    console.log(splitSort[i]);
  }
}
console.log(splitSort);

// let sorted = split.sort()
// console.log(sorted);
