function CountWords(str) {
  const words = str.trim().split(/\s+/);
  return words.length;
}

console.log(CountWords("Hello, I'm Varun"));

//to find the count of letters
function countLetters(str) {
  const letters = str.match(/[a-zA-z]/g);
  return letters ? letters.length : 0;
}

console.log(countLetters("Hello, I'm Varun"));
