function greetUser(name) {
  function sayhello() {
    return "Hello " + name;
  }
  return sayhello();
}

console.log(greetUser("Varun"));
