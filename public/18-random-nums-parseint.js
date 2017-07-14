console.log("Lesson #18: Randow Numbers & parseInt")
// https://youtu.be/-xAJKmjKCUE?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

console.log("1:", Math.floor(Math.random() * 20));

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("2:", randomRange(1, 9));

console.log("3:", parseInt("007"));
console.log("4:", parseInt("#007"));
console.log("5:", parseInt("t007"));
// second argument in parseInt is the base (here is binary)
console.log("6:", parseInt("11", 2));
