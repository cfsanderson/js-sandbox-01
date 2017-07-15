console.log("Lesson 24: Objects, Part 2")
// https://youtu.be/r6SnMjsLrBk?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

// Using Objects for Lookups
var alpha = {
  1: "Z",
  2: "Y",
  3: "X",
  4: "W",
  5: "V"
}
console.log("1:", alpha[2]);


// Remove Object Properties
let dishes = {
  plates: 8,
  cups: 10,
  forks: 28,
  bowls: 13
};
console.log("2:", dishes);
delete dishes.cups;
console.log("3:", dishes);


// Testing Objects for Properties
console.log("4:", dishes.hasOwnProperty('plates'));
console.log("5:", dishes.hasOwnProperty('cups'));


// Accessing and Modifying Nested Objects
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
console.log("6:", ourStorage.cabinet["top drawer"].folder2);
console.log("7:", ourStorage.desk.drawer);
ourStorage.cabinet["top drawer"].folder2 = "cake recipe";
console.log("8:", ourStorage.cabinet["top drawer"].folder2);


// Generate an Array of All Object Keys
console.log("9:", Object.keys(ourStorage));
