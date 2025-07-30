// Topic: Object Classes
// Level: Beginner
// Problem: Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getValue() {
    const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
    return volume;
  }
}

const cylinder = new Cylinder(5, 5);
console.log("The volume of Cylinder is: ", cylinder.getValue());
