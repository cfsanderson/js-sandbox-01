console.log("Lesson #31: Immediately Invoked Function Expressions")
// https://youtu.be/3cbiZV4H22c?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

var something = "For some reason the IIFEs below would not run without something up here"
console.log(something);


(function() {
  var a = true;
  console.log("1:", "My favorite number is 42");
})();


(favNumber = function (num = 43) {
  console.log("2:", "My favorite number is " + num);
})();

favNumber(5)

var a = 15;

(function() {
  var a = 16;
  console.log("3:", a);
})();

// The console log below cannot access the closure above so it uses the global variable.
console.log("4:", a);

let b = 17;

{
  let b = 18;
  console.log("5:", b);
}

console.log("6:", b);
