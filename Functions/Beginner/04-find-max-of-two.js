// Topic: Functions
// Level: Beginner
// Problem: Find maximum of two numbers

/*function findMaxOfTwo(num1, num2) {
  if (num1 > num2) {
    console.log("Num1 is greater than Num2");
  } else {
    console.log("Num2 is greater than Num1");
  }
}

findMaxOfTwo(10, 5);
findMaxOfTwo(5, 10);*/

//arrow function

const findMaxOfTwo = (num1, num2) => {
  if (num1 > num2) {
    return "num1 is greater than num2";
  } else {
    return "num2 is greater than num1";
  }
};

console.log(findMaxOfTwo(10, 5));
console.log(findMaxOfTwo(5, 10));

//using reduce method
const nums = [4, 10, 20, 15, 7];

const max = nums.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, nums[0]);

console.log(max);
