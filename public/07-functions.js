console.log("Lesson #7: Functions");
// https://youtu.be/R8SjM4DKK80?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

function square(number) {
  return number * number;
}

let ten = 10
console.log("1:", square(ten));

// global scope variable
let someVar = "Hat";

function myFun() {
  // local scope variable takes precedence here
  let someVar = "Shoes";
  console.log("2:", someVar);
}

myFun();
console.log("3:", someVar);

console.log("hoisted:", addSquares(1, 3));

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b)
}

a = addSquares(2, 3);
b = addSquares(3, 4);
c = addSquares(4, 5);
console.log("4:", a);
console.log("5:", b);
console.log("6:", c);
