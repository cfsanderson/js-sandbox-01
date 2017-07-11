console.log("Lesson #12: Logical Operators && TRICKS with Short-Circuit Evaluation")
// https://youtu.be/r7v6EIiHfVA?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

// AND: && - OR: ||

var num = 6

if (num > 5) {
  if (num < 10) {
    console.log("1:", "Unicycle!");
  }
}

if (num > 5 && num < 10) {
  console.log("2:", "Unicycle!");
}

if (num > 5 || num < 10) {
  console.log("3:", "Unicycle!");
  // every number ;)
}

// Short-Circuit Evaluation: if first condition in a logical operator is not met, it will not evaluate the second condition (e.g. (1 === 2 && 1 === 1) will only evaluate first condition and then break because obviously BOTH can't be true. Same applies to ||. If the first condition is true, then the second is not evaluated)

if (4 > 5 && 5 > 6) {
  console.log("4:", "Yep!");
} else {
  console.log("5", "Nope.");
}

// change the value of the 'test' variable from true to false.
var test = true;

var isTrue = function(){
  console.log("6:", "Test is true.");
};

var isFalse = function() {
  console.log("7:", "Test is false.");
}

// normal way...
if (test) {
  isTrue();
  console.log("8:", "It's true - (normal way)");
}

// Short-Circuit way...
( test && isTrue() );

test = false;

if(!test){
  isFalse();
  console.log("9:", "It's false - (normal way)");
}

( test || isFalse() )

function theSameOldFoo(name){
  name = name || 'Foo';
  console.log("10:", "My best friend's name is " + name);
}
theSameOldFoo();
theSameOldFoo('Bar');
