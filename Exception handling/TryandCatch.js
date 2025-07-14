// function divideNumbers(num1, num2) {
//   try {
//     if (num2 === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     return num1 / num2;
//   } catch (error) {
//     return "An error occurred: " + error.message;
//   }
// }

// console.log(divideNumbers(10, 0));
// console.log(divideNumbers(9, 3));

//Safe JSON Parsing

// function safeParsing(words) {
//   try {
//     let obj = JSON.parse(words);
//     console.log(obj);
//   } catch (error) {
//     console.log("An error occurred: ", error.message);
//   }
// }

// console.log(safeParsing('{"name": "Varun"}'));
// console.log(safeParsing("Welcome to js"));

//Task 3: Access Property Safely
// function accessProperty(obj, propname) {
//   try {
//     console.log(` ${propname}: ${obj[propname]}`);
//   } catch (error) {
//     console.log("An error occurred: ", error.message);
//   }
// }
// accessProperty({ name: "Varun" }, "name");
// accessProperty(null, "name");

//Task 4: Type Checking
function typeChecking(num) {
  try {
    if (typeof num === "number") {
      console.log(`Valid number: ${num}`);
    } else {
      throw new Error(`Invalid number: ${num}`);
    }
  } catch (error) {
    console.log("This is an invalid number", error.message);
  }
}
console.log(typeChecking(121));
console.log(typeChecking("hi"));
