// Topic: setTimeout(), function(), .foreach()
// Level: Beginner
// Task:
// Print "One" after 1 second
// Print "Two" after 2 seconds
// Print "Three" after 3 seconds

/*setTimeout(() => {
  console.log("One");
}, 1000);

setTimeout(() => {
  console.log("Two");
}, 2000);

setTimeout(() => {
  console.log("Three");
}, 3000);*/

// Using Function

/*function delayedPrint(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

delayedPrint("One", 1000);
delayedPrint("Two", 2000);
delayedPrint("Three", 3000);*/

// Using .forEach()

const messages = ["One", "Two", "Three"];

messages.forEach((msg, index) => {
  setTimeout(() => {
    console.log(msg);
  }, (index + 1) * 1000);
});
