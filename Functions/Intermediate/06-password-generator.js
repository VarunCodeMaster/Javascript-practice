function passwordGenerator(username) {
  function createToken() {
    return username + "_" + Math.floor(Math.random() * 10000);
    // return username + Math.floor(Date.now() * Math.random());
  }
  return createToken();
}

console.log(passwordGenerator("Varun"));
console.log(passwordGenerator("Suresh"));
