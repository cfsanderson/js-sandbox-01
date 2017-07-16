console.log("Lesson #28: THIS Keyword")
// https://youtu.be/eOI9GzMfd24?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

/*
THIS is the object that owns the JS code.
The value of THIS when used in a function is the object that owns the function.
The value of THIS when used in an object is the object itself.
When used outside of a function or object, THIS refers to the global object (examples 1-3 below)
*/
console.log("1:", this.document === document);
console.log("2:", this === window);

this.a = 42;
console.log("3:", window.a);

// In a function if the value of THIS is not set by the call, THIS will default to the global object.
function f1A() {
  return this;
}
console.log("4:", f1A() === window);

// but when we 'use strict'
function f1B() {
  'use strict';
  return this;
}
console.log("5:", f1B() === window);

// Call and apply methods
// When a function uses the THIS keyword in it's body, it's value can be bound to a particular object in the call using the call or apply methods.
function add(c, d) {
  return this.a + this.b + c + d;
}

// Make an object "o" where "a" is set to 1 and "b" is set to 3
var o = {a: 1, b: 3};

/*
Run the "add" function with the "call" method.
The first parameter in the call method is the object to use as THIS and other parameters are used as arguments in the function call.
*/
console.log("6:", add.call(o, 5, 7));

// 'call' and 'apply' are similar except that 'call' accepts a list of arguments whereas 'apply' accepts a single array of arguments.
console.log("7:", add.apply(o, [10, 20]));

/*
When calling the "bind" method on a function and pass in an object, it creates a new function with the same body and scope as the original function but where THIS occurs in the original function, in the new function, it is permanently bound to the first argument of "bind".
*/
function f() {
  return this.a;
}

var g = f.bind({a: "unicycle"});
console.log("8:", g());

var h = g.bind({a: "cereal"}); /* won't work a second time */
console.log("9:", h());

/*
In the below example, "o" is an object with the keys
- "a" set to 8
- "f" set to the f function
- "g" set to the g function
- "h" set to the h function
which means that when we log it in #10
- "o.f()" will run the f function where THIS is set to "a" and the "o" object sets "a" to 8. Should log 8.
- "o.g()" will run the
*/
var o = {a: 8, f: f, g: g, h: h};
console.log("10:", o.f(), o.g(), o.h());

// In an arrow function THIS is bound to the enclosing scope at creation time and cannot be changed so operators "bind", "call", and "apply" do not work.

var fizz = {
  traditionalFunc: function () {
    console.log("11", "traditionalFunc this === fizz?", this === fizz);
  },
  arrowFunc: () => {
    console.log("12:", "arrowFunc this === fizz?", this === fizz);
    console.log("13:", "arrowFunc this === window?", this === window);
  }
};

fizz.traditionalFunc();
// In the traditional function THIS was created in the scope of fizz.
fizz.arrowFunc();
// The arrow function was created in the scope of window and run in the scope of fizz. Arrow function is forever bound to the scope of fizz where it was created (window).


// When a function is called as a method of an object, it's THIS is set to the object the method is called on.
var buzz = {
  prop: 37,
  f: function() {
    return this.prop;
  }
} ;

console.log("14:", buzz.f()); /* logs 37 */

var fuzz = { prop: 23 };

function independentOffuzz() {
  return this.prop;
}

fuzz.f = independentOffuzz;

// It does not matter where the function was defined. It just matters that it is being called from within the object so it will refer to the property within the object.
console.log("15:", fuzz.f());
