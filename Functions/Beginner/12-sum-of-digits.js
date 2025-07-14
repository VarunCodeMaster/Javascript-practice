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
