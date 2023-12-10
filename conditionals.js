let x = 10;
let y = 45;
// if the condition is true it will print or it will go to else
if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("y is greater than x");
}

// you can give multiple conditions
if (x + y == 60) {
  console.log("sum = 60");
} else if (x + y !== 60) {
  console.log("sum is not 60");
} else {
  console.log("its 55");
}
// you can give conditions inside a condition
if (x < y) {
  if (x + y == 65) {
    console.log("its not 55");
  } else if (x + y == 75) {
    console.log("its 55");
  }
  else{
    console.log("its obviously 55");
}
}
else{
    console.log("i dont know what it is");
}
