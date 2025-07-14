function isEvenOrOdd(num) {
  if (num % 2 !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isEvenOrOdd(1));

//More Concise method.
// function isEvenOrOdd(num) {
//   return num % 2 === 0;
// }

// console.log(isEvenOrOdd(20));
// console.log(isEvenOrOdd(7));
