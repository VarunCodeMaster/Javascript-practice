function sumOfNumbers(arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
}

console.log(sumOfNumbers([1, 2, 3, 4, 5]));
