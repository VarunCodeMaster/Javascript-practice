//Access a property on an object that might be undefined, and use try...catch to avoid crashing

function getCity(person) {
  try {
    return person.city ?? "city not found";
  } catch (error) {
    return "City not found";
  }
}

let person = { name: "Varun" };
console.log(getCity(person));
