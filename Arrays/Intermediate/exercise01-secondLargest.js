//using Set() and sort()
/*function secondLargest(arr) {
  const sorted = [...new Set(arr)].sort((a, b) => b - a);
  return sorted[1];
}

console.log(secondLargest([10, 20, 48, 27, 30]));*/

//without using sort()
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  // if (arr.length < 2) return "not enough elements";
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second;
}

console.log(secondLargest([10, 20, 48, 27, 30]));
console.log(secondLargest([14])); //returns -Infinity
