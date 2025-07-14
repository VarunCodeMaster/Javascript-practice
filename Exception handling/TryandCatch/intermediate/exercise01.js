// Create a function that accepts a JSON string. If the string is invalid JSON, catch the error and return a default object.

function parseJSON(obj) {
  try {
    if (obj !== JSON.parse(obj)) {
      throw new Error("Not an object");
    }
    return JSON.parse(obj);
  } catch (error) {
    return "Error occurred: ", error.message;
  }
}

let validJSON = '{"name": "Varun", "age": 20}';
let invalidJSON = '{name: "Varun", age: 20}';

console.log(parseJSON(validJSON));
console.log(parseJSON(invalidJSON));
