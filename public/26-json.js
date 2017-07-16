console.log("Lesson #26: JSON")
// https://youtu.be/B-k76DMOj2k?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

/* example in name/value pairs that must be one of _ data types...
- a string
- a number
- a JSON object
- an array
- a boolean
- null

CANNOT be a function, a date, or undefined

Since it's text only it can be sent via a browser very easily.

*/

var myJSON = {
  "name": {
    "first": "Caleb",
    "last": "Sanderson"
  },
  "age": 41,
  "skills": ["music", "design", "programming"],
  "married": true,
  "superpowers": null
}

// stringify method
var stringified = JSON.stringify(myJSON)
console.log("1:", stringified);

// parse method
var stringJSON = '{ "name":"Caleb", "kids":2, "state":"Florida" }';
var myParse = JSON.parse(stringJSON);
console.log("2:", myParse);
