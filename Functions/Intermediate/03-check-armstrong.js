function isArmstrong(num) {
  const digits = String(num).split("");
  const power = digits.length;

  const sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), power);
  }, 0);

  return sum === num;
}

console.log(isArmstrong(123));
console.log(isArmstrong(153));
