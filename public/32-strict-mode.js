// "use strict";
console.log("Lesson #32: Strict Mode")
// https://youtu.be/uqUYNqZx0qY?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

/* Code should run successfully. Uncomment the "use strict"; statement at the top and rerun to see how it functions, or doesn't. */

function myFunction() {
  y = 3.14;
  return y
  // will throw an error if it does not have var, let, or const declared first
  // declare "y" variable with let or const AND/OR uncomment "use strict" at the beginning to see differences.
}
console.log("1:", myFunction())


/* ===== CONVERTING MISTAKES INTO ERRORS =====
deleting not allowed in strict mode */
var x = 3.1416
delete x;
console.log("2:", x);

/*
In normal JS, will get no error feedback when assigning values to non-writable properties.
In strict mode, any assignment to a non-writable property, a getter only property, a non-existing property, a non-existing variable or a non-existing object will throw an error.
*/
var obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });
obj.x = 3.14
console.log("3:", obj.x);

var obj = { get x() {return 0} };
obj.x = 3.14;
console.log("4:", obj.x);

// can't delete in either but in strict mode will throw an error.
delete Object.prototype;


// function sum(a, a, c) {
//   'use strict';
//   return a + b + c;
// }

function sum(a,b,c) {
  return a + b + c;
}
console.log("5:", sum(1,2,3));


// ===== WITH AND EVAL CHANGES =====
/*
The 'with' statement extends the scope chain for a statement.
Strict mode prohibits 'with' completely.
*/
var x = 17;
// with (obj) {
//   x; /* Is this var x or obj.x? */
// }

/*
In strict mode eval does not introduce new variables into the surrounding function or global scope.
*/
eval("var x;")

var x = 17;
var evalX = eval("'use strict'; var x = 42; x;")
console.assert(x === 17);
console.assert(evalX === 42);


// ===== SECURING JAVASCRIPT =====
