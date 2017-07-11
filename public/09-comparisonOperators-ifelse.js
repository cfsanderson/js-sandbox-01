console.log("Lesson #9: Comparison Operators & If Else")
// https://youtu.be/7WkfzokHGqo?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

var isFCCGreat = true;

if (isFCCGreat) {
  console.log("1:", "Free Code Camp is amazing!");
} else {
  console.log("2:", "Free Code Camp is horrible!");
};

// Comparison Operators: > < <= >= == !=
// change the age to see how the else if statement works
var age = 17;

if (age >= 18) {
  console.log("3:", "You are an adult!");
} else if (age < 2) {
  console.log("4:", "You are baby.");
} else if (age < 18) {
  console.log("5:", "You are a child.");
}

if (age == 18) {console.log("6:", "You are eighteen.");}
if (age != 18) {console.log("7:", "You are NOT eighteen.");}
