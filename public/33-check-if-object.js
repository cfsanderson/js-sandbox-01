console.log("Lesson #33: Check if a Property is in an Object")
// https://youtu.be/dpTFcPUe2oo?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

var myObject = {
  name: 'JS Nuggets'
};

if (myObject.name) {
  console.log("1:", "it is in!");
}

// ^ works but there are 2 native ways in JS to check.

console.log("2:", myObject.hasOwnProperty('name'));
console.log("3:", 'name' in myObject);
// 'hasOwnProperty' will only return true if the key is available on the object directly.
// 'in' will be true whether it is created directly on the object or it is inherited from the prototype chain.

console.log("4:", myObject.hasOwnProperty('valueOf'));
console.log("5:", 'valueOf' in myObject);
//  'valueOf' is a property in ALL objects as part of the prototype of an object but was not directly created on the object. Therefore '.hasOwnProperty' will return false.
