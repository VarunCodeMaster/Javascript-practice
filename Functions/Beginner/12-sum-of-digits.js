/*function sumOfDigits(num) {
  return (num = String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0));
}

console.log(sumOfDigits(1234));*/

//using recursive
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}

console.log(sum(5));

//using While loop
function sumOfDigits(num) {
  num = Math.abs(num);
  let sum = 0;

  while (num > 0) {
    sum += num % 10; //sum = 3
    num = Math.floor(num / 10); //num = 12
  }
  return sum;
}

console.log(sumOfDigits(1234)); // Output: 10
console.log(sumOfDigits(-567)); // Output: 18

//using reduce method
const nums = [18, 45, 10, 17];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
