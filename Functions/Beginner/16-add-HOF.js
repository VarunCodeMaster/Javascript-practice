// Topic: Higher Order Function
// Level: Beginner
// Problem: Create function 'fn' exactly 'times' times

function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

function sayhello() {
  console.log("Hello!");
}

repeat(sayhello, 3);
