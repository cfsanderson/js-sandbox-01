// #4 String Basics
// https://youtu.be/Vd_Z1bYGrCM?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5

let myName = "Caleb";

let sentence = "He said \"Hi!\", ";

console.log(sentence + myName);

/*
Code Output
\' single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f form feed
*/

let fullName = 'Caleb ' + 'Sanderson';
let sentence2 = 'My name is ' + fullName;
console.log(sentence2);

fullName += ' is my name.';
console.log(fullName);
