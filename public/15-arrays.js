console.log("Lesson #15: Arrays")
// https://youtu.be/QEZXbRiaY1I?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

var sandwich = ["peanut butter", "jelly", "bread"];

var teams = [["Bulls", 23], ["White Sox", 45]];

console.log("1:", sandwich[1]);

sandwich[1] = "bananas";
console.log("2:", sandwich);

console.log("3:", teams[1][0]);
teams[1][0] = "Red Sox";
console.log("4:", teams[1][0]);

sandwich.forEach(function(element) {
  console.log("5:", element);
})
