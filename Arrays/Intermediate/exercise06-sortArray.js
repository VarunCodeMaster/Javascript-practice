let users = [
  { name: "Alice", age: 32 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 28 },
];

users.sort((a, b) => a.age - b.age);

//users.sort((a, b) => b.age - a.age); descending order

console.log(users);
