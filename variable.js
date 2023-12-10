//  js has 3 types of variable

// **01. var => works globally. can change value
var age = 50;
age = 30;
function letage() {
 age = 10;
//   console.log(age);
}
console.log(age);
// letage();

// **02. let => doesnt work globally. can change value . has block scope
let x = 50;
x = 60;
function letx(){
x = 10;
console.log(x);
}
console.log(x);
letx();

// **03. const => doesnt work globally. can't change value
const pi = 3.1416;
function letpi() {
  pi = 10;
  console.log(pi);
}
console.log(pi);
// letx();