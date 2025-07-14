function swap(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

let [a, b] = swap(5, 10);
console.log(`Value of A is: ${a}`);
console.log(`Value of B is: ${b}`);
