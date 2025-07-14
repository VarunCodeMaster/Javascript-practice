//using Function and for...of
/*function countFrequencies(arr) {
  const frequency = {};

  for (let item of arr) {
    frequency[item] = (frequency[item] || 0) + 1; //If the item already exists in the object, add 1 to its count.
    //If it doesn't exist yet (i.e. undefined), use 0 + 1 → which gives 1.
  }
  return frequency;
}

console.log(
  countFrequencies(["apple", "banana", "apple", "cherry", "banana", "banana"])
);*/

//using reduce()
const countFrequencies = (arr) =>
  arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

console.log(
  countFrequencies([
    "apple",
    "banana",
    "apple",
    "cherry",
    "banana",
    "banana",
    "cherry",
  ])
);
