// function factorial(num) {
//   if (num === 0) return 1;

//   return num * factorial(num - 1); //Using recursive method
// }

// console.log(factorial(5));
// console.log(factorial(10));

//Alternative method
function factorial(n) {
  if (typeof n !== "number") {
    console.error("Error: This is not a number");
    return "";
  }
  // Input validation: Check for negative numbers.
  if (n < 0) {
    console.error("Error: This is a negative number");
  }

  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const num1 = 5;
console.log(`Factorial of ${num1} is: ${factorial(num1)}`);
