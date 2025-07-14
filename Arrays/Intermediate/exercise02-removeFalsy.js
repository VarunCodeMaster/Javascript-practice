//using filter
/*const arr = [0, "hello", false, 42, "", null];
const cleaned = arr.filter(Boolean);

console.log(cleaned);*/

//using explicit test
/*function removefalsy(arr) {
  return arr.filter((item) => !!item);
}

console.log(removefalsy([0, "hello", false, 42, "", null]));*/

//manual loop
function removefalsy(arr) {
  const result = [];

  for (let fal of arr) {
    if (fal) result.push(fal);
  }
  return result;
}

console.log(removefalsy([0, "hello", false, 42, "", null]));
