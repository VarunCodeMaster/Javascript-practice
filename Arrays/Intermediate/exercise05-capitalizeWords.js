function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world from javascript"));
