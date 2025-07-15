//nested

function calculator(x) {
  function add(y) {
    return x + y;
  }
  function subtract(y) {
    return x - y;
  }
  function multiply(y) {
    return x * y;
  }

  return {
    add,
    subtract,
    multiply,
  };
}

const calc = calculator(30);
console.log(calc.add(10));
console.log(calc.subtract(15));
console.log(calc.multiply(5));
