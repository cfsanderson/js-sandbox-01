console.log("Lesson #20: While / Do While")
// https://youtu.be/v9zgD8wjtbw?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

var n = 0;

console.log("The WHILE loop checks for the condition before it runs and won't run unless condition is met.");
while (n < 5) {
  n++;
  console.log("n = " + n);
}

while (n < 10) {
  n++;
  if (n == 3) continue;
  console.log("n w/ continue = " + n);
}

while (n < 15) {
  n++;
  if (n == 13) break;
  console.log("n w/ break at 13 = " + n);
}


console.log("The DO loop always runs at least once and checks for condition after each pass.");
var i = 0;

do {
  i++;
  console.log("i = " + i);
} while (i < 5);
console.log("Change value of the variables 'i' and 'n' to 5 and rerun to check their behavior");
