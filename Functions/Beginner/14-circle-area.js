function circle(radius) {
  function area() {
    let area = 3.14 * (radius * radius);
    return area;
  }
  return area();
}

console.log(circle(50));
