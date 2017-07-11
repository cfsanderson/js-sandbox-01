console.log("Lesson #8: Hoisting");
// https://youtu.be/C1PZh_ea-7I?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

// Uncaught ReferencError: notDeclared is not defined
// console.log("1:", notDeclared);

console.log("2:", definedLater);
var definedLater;
definedLater = 'I am defined!'
console.log("3:", definedLater);

console.log("4:", definedSimulaneously);
var definedSimulaneously = 'I am defined!'
console.log("5:", definedSimulaneously);

doSomethingElse();
function doSomethingElse(){
  console.log("6:", 'I did it!');
}

// Uncaught TypeError: functionVar is not a function
// functionVar();
var functionVar = function(){
  console.log("7:", 'I did it!');
}
functionVar();
