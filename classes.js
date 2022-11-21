// ES6 classes are syntaticall sugar for functions

// We can define class as expression or declaration like function but unlike
// function declaration hoisting we dont have class hoisting
class Circle {
  constructor(radius) {
    // properties/methods under constructor will be on object instance
    this.radius = radius;
    this.area = () => {
      console.log('Calculating area...');
    };
  }
  // methods definde outside constructor will be on proto
  diameter = 5;
  // defining static members
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
  draw() {
    console.log('Drawing...');
  }
}
const c = new Circle(5);
const c2 = Circle.parse(`{"radius":1}`);
// c.area();
// c.draw();
