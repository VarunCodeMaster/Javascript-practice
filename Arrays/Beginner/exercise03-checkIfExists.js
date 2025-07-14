//includes method
/*const fruits = ["apple", "banana", "cherry"];
const exists = fruits.includes("banana");

console.log(exists);

//indexof() method
const fruits = ["apple", "banana", "cherry"];
const exists = fruits.indexOf("banana") !== -1;
const exists2 = fruits.indexOf("dragon fruit") !== -1;

console.log(exists);
console.log(exists2);

//Using a loop
function checkIfExists(fruits, item) {
  for (let fruit of fruits) {
    if (fruit === item) return true;
  }
  return false;
}

console.log(checkIfExists(["apple", "banana", "cherry"], "banana"));
console.log(checkIfExists(["apple", "banana", "cherry"], "dragon fruit"));

//case-insensitive version
function checkCaseInSensitive(arr, target) {
  target = target.toLowerCase();

  for (let item of arr) {
    if (item.toLowerCase() === target) return true;
  }
  return false;
}

console.log(checkCaseInSensitive(["Apple", "Banana", "CHERRY"], "Banana"));
console.log(checkCaseInSensitive(["Apple", "Banana", "CHERRY"], "CHERRY"));
console.log(checkCaseInSensitive(["Apple", "Banana", "CHERRY"], "apple"));
console.log(checkCaseInSensitive(["Apple", "Banana", "CHERRY"], "mango"));*/

//case-insensitive version using some()
function checkCaseInSensitive(arr, target) {
  return arr.some((item) => item.toLowerCase() === target.toLowerCase());
}

console.log(checkCaseInSensitive(["Apple", "Banana", "CHERRY"], "Banana"));
console.log(checkCaseInSensitive(["Apple", "Banana", "CHERRY"], "mango"));
