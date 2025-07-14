function capitalizeFirstLetter(word) {
  if (typeof word !== "string") {
    console.error("Error: The word is not a string");
    return "";
  }

  let upperCase = word.charAt(0).toUpperCase();

  let restStr = word.slice(1);

  return upperCase + restStr;
}

console.log(capitalizeFirstLetter("varun"));
console.log(capitalizeFirstLetter("javascript"));
