function isPalindrome(str) {
  if (typeof str !== "string") {
    console.error("Error: This is not a String");
    return "";
  }
  //To avoid white spaces and special characters
  let normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  //If the normalized string is empty or has only one character, it's considered a palindrome
  if (normalizedStr <= 1) {
    return true;
  }

  let reversedStr = normalizedStr.split("").reverse().join("");

  return reversedStr === normalizedStr;
}

console.log(isPalindrome("Varun"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("RaceCar"));

//Alternative and short method
/*function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

console.log(isPalindrome("RaceCar"));              // true
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("OpenAI"));               // false*/
