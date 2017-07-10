console.log("Lesson #2: Data Types");
// https://youtu.be/808eYu9B9Yw?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

// Boolean
let data = false;
if (data) {
  console.log("Booleans rule!")
} else {
  console.log("Booleans are lame.");
}

// null
let n = null
console.log(n *32);


// undefined
let a;
console.log(a + 2);


// Number
let num = 3.6;
let ber = 6.4;
console.log(num +ber);


// String. "Howdy"
let name = "Cody"
console.log("Hi! My name is " + name);


// Symbol
let sym1 = Symbol("foo");
let sym2 = Symbol("foo");
console.log(sym1 === sym2);
console.log(String(sym1));
console.log(String(sym1) === String(sym2));


// Object
let myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
console.log(myCar.make);
