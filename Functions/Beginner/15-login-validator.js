function login(username, password) {
  function validate() {
    if (username === "admin" && password === 1234) {
      return true;
    }
    return false;
  }
  return validate();
}

console.log(login("admin", 1234));
console.log(login("Varun", 2345));
