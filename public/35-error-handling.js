console.log("Lesson #35: try, catch, finally, throw - Error Handling in JS")
// https://youtu.be/cFTFtuEQ-10?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

/*
try{} - lets you test a block of code for errors
catch{} - lets you handle the error
throw{} - lets you create custom errors
finally{} - lets you execute code after catch regardless of errror.
*/

try {
  console.log("1:", 'Start of try runs');

  // to change, declare 'var' in front of unicycle and rerun code.
  unicycle;

  console.log("2:", 'End of try runs');
} catch(err) {

  console.log("3:", 'Error has occured: ' + err.stack);
  // can also be run without '.stack'

} finally {
  console.log("4:", 'This is always run');
}

console.log("5:", '...then the execution continues');


// normally json data would be coming from a server but will simulate here with a JSON object.
let json = '{ "age": 30 }';

try {

  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("Incomplete data - no name");
  }

  console.log("6:", user.name);

} catch(err) {
  console.log("7:", "JSON Error: " + err.message );
} finally {
  console.log("8:", "Here is where you can do something else since it it always run regardless of the error.");
}
