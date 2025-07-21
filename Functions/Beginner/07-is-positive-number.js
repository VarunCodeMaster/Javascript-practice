// Topic: Functions
// Level: Beginner
// Problem: Check whether a number is positive or not

function isPositiveNumber(num) {
  if (num >= 0) {
    return true; //returns true if the number is greater than 0
  } else {
    return false;
  }
}

console.log(isPositiveNumber(-19)); //false
console.log(isPositiveNumber(19)); //true
