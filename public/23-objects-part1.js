console.log("Lesson #23: Objects")
// https://youtu.be/Gp5nnerXETg?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.color;
console.log("1:", myCar.make);
console.log("2:", myCar.color);

myCar["year"] = 1969;
console.log("3:", myCar["model"]);

myCar["Do I like?"] = "I hate my car.";
console.log("4:", myCar["Do I like?"]);

function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}
console.log("5:", showProps(myCar, "myCar"));

// Creation: object initializer
var myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}}


// Creation: constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var newCar = new Car("Chevy", "Malibu", 1993);
var anotherCar = new Car("Mazda", "Miata", 1990);
console.log("6:", newCar.model);
newCar.color = "black";
console.log("7:", newCar.color);


// Creation: Object.create

// This allows you to choose a prototype object for the object you want to create without having to define a constructor function
// A method is just a property of an object that IS a function
var Animal = {
  type: "Invertebrates",
  // default type is "Invertebrates" but we can change that later
  // method of displayType is a function that console.logs the value of this.type
  displayType: function() {
    console.log("8:", this.type);
  }
}

var animal1 = Object.create(Animal);
animal1.displayType();

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();



console.log("============================================================");
function Thing(dos, tres, quatro) {
  this.uno = "that",
  this.dos = dos,
  this.tres = tres,
  this.quatro = quatro
}

let beans = "beans";
let potatoes = {prop1: "mashed", prop2: "skins", prop3: "lumpy"};
let cabbage = function() {
  console.log("cabbage is good.");
}

let thing = new Thing(beans, potatoes, cabbage)
console.log(thing);
console.log(thing.tres.prop2);
thing.quatro()
