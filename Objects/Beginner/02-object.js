// Topic: Objects
// Level: Beginner
// Problem: Write a JavaScript program to list the properties of a JavaScript object.

const student = {
  name: "Varun",
  degree: "BCA",
  rollNo: "22-UCA-028",
};

for (let key in student) {
  if (student.hasOwnProperty(key)) {
    console.log(`${key}: ${student[key]}`);
  }
}

// for key
// function listProperties(obj) {
//   return Object.keys[obj];
// }

// console.log(listProperties(student));

//Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

delete student.rollNo;

console.log(student);

//Write a JavaScript program to get the length of a JavaScript object.

let obj = Object.keys(student).length;
console.log(obj);
