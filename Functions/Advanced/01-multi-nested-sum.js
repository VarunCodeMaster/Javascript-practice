// Topic: Nested function
// Level: Advanced
// Problem: Multi Nested Sum

function outer(x) {
  function middle(y) {
    function inner(z) {
      return x + y + z;
    }
    return inner;
  }
  return middle;
}

console.log(outer(1)(2)(3));
