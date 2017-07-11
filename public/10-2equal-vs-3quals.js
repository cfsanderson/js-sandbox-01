console.log("Lesson #10: == vs ===")
// https://youtu.be/kVOmc7NK1M0?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

// == abstract equality
console.log("1:", (3 == "3"));

// === strict equality
console.log("2:", (3 === "3"));

console.log("3:", (true == "1"));
console.log("4:", (true === "1"));

console.log("5:", ("This is a string." == new String("This is a string.")));
console.log("6:", ("This is a string." === new String("This is a string.")));
