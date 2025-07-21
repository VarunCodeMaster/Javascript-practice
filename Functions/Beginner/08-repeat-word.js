// Topic: Functions
// Level: Beginner
// Problem: Repeat word n number of times

function repeatWord(word, times) {
  if (typeof word !== "string") {
    console.error("Error: The word must be a String");
    return "";
  }
  if (typeof times !== "number" || times <= 0) {
    console.error("Error: The times must be a non-negative number");
    return "";
  }

  return (word + " ").repeat(times);
}

// console.log(repeatWord("Varun", 5));

//either way
const word1 = "hello";
const times1 = 3;
console.log(
  `"${word1}" repeated ${times1} times: "${repeatWord(word1, times1)}"`
);
