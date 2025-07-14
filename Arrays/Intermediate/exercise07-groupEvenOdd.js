//using reduce() method
/*function groupEvenOdd(arr) {
  return arr.reduce(
    (acc, curr) => {
      if (curr % 2 === 0) {
        acc.even.push(curr);
      }
      if (curr % 3 === 0) {
        acc.odd.push(curr);
      }
      return acc;
    },
    { even: [], odd: [] }
  );
}

console.log(groupEvenOdd([1, 2, 3, 4, 5, 6]));*/

//using loop
function groupEvenOdd(arr) {
  let result = { even: [], odd: [] };

  for (let num of arr) {
    if (num % 2 === 0) {
      result.even.push(num);
    }
    if (num % 3 === 0) {
      result.odd.push(num);
    }
  }
  return result;
}

console.log(groupEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));
