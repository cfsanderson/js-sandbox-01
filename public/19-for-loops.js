console.log("Lesson #19: For Loops")
// https://youtu.be/24Wpg6njlYI?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

// for ([initialization]; [condition]; [final-expression]) {}

var ourArray = []
for (var i = 0; i < 5; i++) {
  if (i > 2) break;
  ourArray.push(i);
}
console.log("1:", ourArray);

var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
  console.log(`${i + 2}:`, arr[i]);
}

// loops within loops within...
var arr2 = [
  [1,2], [3,4], [5,6]
];
for (var i = 0; i < arr2.length; i++) {
  for (var j = 0; j < arr2[i].length; j++) {
    console.log(`${j + 1} time inner array:`, arr2[i][j]);
  }
}
