//First method (clean and simple)
/*const arr = [1, 10, 20, 25, 15];
const max = Math.max(...arr);
console.log(max);

//using reduce method
const arr = [1, 2, 3, 99, 4, 5];
const max = arr.reduce((acc, curr) => (acc > curr ? acc : curr), 0);
console.log(max);*/

//Using a loop
function findMax(arr) {
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 2, 3, 99, 4, 5]));
