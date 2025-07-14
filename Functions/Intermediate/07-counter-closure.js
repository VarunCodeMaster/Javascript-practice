function createCounter() {
  let count = 0;
  function increaseCount() {
    count++;
    return count;
  }
  return increaseCount;
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
