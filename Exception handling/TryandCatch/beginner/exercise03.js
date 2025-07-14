function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("You can't divide using zero");
    }
    return a / b;
  } catch (error) {
    return error.message;
  }
}

console.log(divide(10, 0));
console.log(divide(10, 5));
