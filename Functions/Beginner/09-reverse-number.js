function reverseNumber(num) {
  const isNegative = num < 0;
  const absoluteNum = Math.abs(num);

  let reversedStr = String(num).split("").reverse().join("");
  let reversedNum = Number(reversedStr);
  return reversedNum;
}

console.log(reverseNumber(1234));
console.log(reverseNumber(5678));
console.log(reverseNumber(-123));
console.log(reverseNumber(123.45));

/*
// --- Alternative approach: Iterative (without converting to string) ---
function reverseNumberIterative(num) {
  const isNegative = num < 0;
  let absoluteNum = Math.abs(num);
  let reversedNum = 0;

  // Handle the case of 0 separately to avoid infinite loop for 0
  if (absoluteNum === 0) {
    return 0;
  }

  while (absoluteNum > 0) {
    const digit = absoluteNum % 10; // Get the last digit
    reversedNum = reversedNum * 10 + digit; // Append the digit to the reversed number
    absoluteNum = Math.floor(absoluteNum / 10); // Remove the last digit
  }

  // Apply the original sign
  return isNegative ? -reversedNum : reversedNum;
}
*/

// const num1 = 12345;
// console.log(`Original: ${num1}, Reversed: ${reverseNumber(num1)}`); //54321
