console.log("Lesson #16: Common Array Methods")
// https://youtu.be/MeZVVxLn26E?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

var arr = ["a", "b", "c"];

arr.push("d");
console.log("1:", arr);

console.log("2:", arr.pop());
console.log("3:", arr);

var arr2 = ["g", "q"];
console.log("4:", arr.concat(arr2));
console.log("5:", arr2);

console.log("6:", arr.join("!"));

console.log("7:", arr.reverse());
console.log("8:", arr);

console.log("9:", arr.shift());
console.log("10:", arr);

console.log("11:", arr.unshift("p"));
console.log("12:", arr);


console.log("13:", arr.slice(1, 2));
console.log("14:", arr);

arr.push("i")
arr.push("f")
arr.sort(arr)
console.log("15:", arr);

console.log("16:", arr.splice(2, 2, "JS Nuggets"));
console.log(arr);
