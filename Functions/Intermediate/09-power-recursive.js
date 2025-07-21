// Topic: Recursive
// Problem: Write a function that calculates x^y using recursion.
// Level: Intermediate

function calc(x, y) {
  if (y === 0) return 1;
  return x * calc(x, y - 1);
}

console.log(calc(5, 6));
