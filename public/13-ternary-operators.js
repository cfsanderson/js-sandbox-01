console.log("Lesson #13: Ternary Operator")
// https://youtu.be/s4sB1hm73tw?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

// condition ? expr1 : expr2

var age = 15

if (age >= 18) {
  console.log("1:", "You are an adult.");
} else {
  console.log("2:", "You are a kid.");
};

console.log("3:", (age >= 18) ? "You are an adult." : "You are a kid.");

var stop;

age > 18 ? (
  console.log("4:", "OK, you can go."),
  stop = false
) : (
  console.log("5:", "Sorry, you are much too young."),
  stop = true
);

var firstCheck = false,
    seconcCheck = false,
    access = firstCheck ? "Access denied" : seconcCheck ? "Access denied" : "Access granted";

console.log("6:", access);
