console.log("Lesson #14: Switch Statements")
// https://youtu.be/fM5qnyasUYI?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
      break;
  case 1:
    day = "Monday";
      break;
  case 2:
    day = "Tuesday";
      break;
  case 3:
    day = "Wednesday";
      break;
  case 4:
    day = "Thursday";
      break;
  case 5:
    day = "Friday";
      break;
  case 6:
    day = "Saturday";
      break;
}
console.log("1:", day);

var Animal = 'Spoon';
switch (Animal) {
  case "Cow":
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log("2:", "This animal will go on Noah\'s Ark.");
    break;
  case "Spoon":
    console.log("3:", "A spoon is not an animal!");
    break;
  case "Dinosaur!":
  default:
    console.log("4:", "This animal will NOT be on the Ark.");
}
