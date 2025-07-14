//using flat
/*const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flatted = arr.flat();

console.log(flatted);*/

//using reduce() and concat()
/*const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];
const flattened = arr.reduce((accu, curr) => accu.concat(curr), []);

console.log(flattened);*/

//using function
function flatten2DArray(arr) {
  const result = [];
  for (let subArr of arr) {
    for (let num of subArr) {
      result.push(num); //This line adds the value num to the end of the result array.
    }
  }
  return result;
}

console.log(
  flatten2DArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
