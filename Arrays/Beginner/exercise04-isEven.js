//Count Even Numbers
/*function isEven(arr) {
  let count = 0;
  for (let char of arr) {
    if (char % 2 === 0) count++;
  }
  return count;
}

console.log(isEven([1, 2, 3, 4, 5, 6]));

//using reduce()
function countEvens(arr) {
  return arr.reduce((count, num) => count + (num % 2 === 0), 0);
}

console.log(countEvens([1, 2, 3, 4, 5, 6]));*/

//using filter
function countEvens(arr) {
  return arr.filter((num) => num % 2 === 0).length;
}
console.log(countEvens([1, 2, 3, 4, 5, 6]));
