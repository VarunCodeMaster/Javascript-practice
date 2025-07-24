// Problem 1: Object Literal
// Create an object called `student` with name, age, and marks.
// Then log all its properties to the console.

/*const student = {
  name: "Varun",
  age: 20,
  cgpa: 8,
};

console.log(
  `Name: ${student.name}, Age: ${student.age}, CGPA: ${student.cgpa}`
);*/

// Problem 2: new Object
// Create the same `student` object using the `new Object()` method.
// Add properties: name = "Varun", age = 20, passed = true

const student = new Object();
student.name = "Varun";
student.age = 21;
student.passed = true;

console.log(
  `Name: ${student.name}, Age: ${student.age}, Pass: ${student.passed}`
);

// Problem 3: Object.create()
// Create a prototype object called `animal` with a method `speak()`
// Then create a new object `dog` using Object.create()
// Set dog.name = "Tommy" and call dog.speak() → should say "Tommy is speaking"

const animal = {
  speak() {
    console.log(this.name + " " + this.sound);
  },
};

const person = Object.create(animal);
person.name = "Jackie";
person.sound = "bow bow";
person.speak();

// Problem 4: Constructor Function
// Create a constructor function `Car` that takes brand and model
// Each object should have a method describe() that logs "Brand: X, Model: Y"
// Create two cars and call describe()

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.describe = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  };
}

const car1 = new Car("Audi", "A7");
const car2 = new Car("BMW", "X5");

car1.describe();
car2.describe();

//Problem 5: Book Constructor function
//Create a constructor function called Book that takes the following parameters
//Create two book objects using the constructor.

function Books(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, year: ${this.year}`
    );
  };
}

const book1 = new Books("Atomic Habits", "James Clear", 2020);
const book2 = new Books("IkIGAI", "Hector Gaurica", 2015);

book1.getSummary();
book2.getSummary();

// Problem 6: ES6 Class
// Rewrite the Car constructor function using ES6 class syntax
// Add a method startEngine() that logs: `${brand} engine started`

class Cars {
  constructor(brand) {
    this.brand = brand;
  }
  startEngine() {
    console.log(`${this.brand} engine started`);
  }
}

const car = new Cars("Audi");
car.startEngine();

// Problem 7: Object.assign()
// Create two objects:
// Use Object.assign() to merge them into a new object `result`
// Print result

const a = { firstName: "Virat" };
const b = { lastName: "Kohli" };

const name = Object.assign({}, a, b);
console.log(name);

// Problem 7: Spread Operator
// Use the spread operator to clone the object
// Create a shallow copy `userClone` and add a new property: role = "developer"

const user = { name: "Varun", age: 20 };

const userClone = { ...user, developer: "Frontend Developer" };
console.log(userClone);
