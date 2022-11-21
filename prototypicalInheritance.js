// Intermediate function inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.draw = function () {
  console.log('Drawing');
};

function Circle(radius, color) {
  // We cannot simply call Shape(color), it will result in adding color to window object
  // Shape(color);
  // Calling the super()
  Shape.call(this, color);
  this.radius = radius;
}

// Object.create method will create an object of given prortype and we will assign it to Circle prototype
// Circle.prototype = Object.create(Shape.prototype);
// Circle is now inherited from Shape, but the problem is whenever we try to
// access the Circle's constructor dynamically i.e., Circle.prototype.constructor()
// it will return shape not circle , therefore we need to reset constructor
// Circle.prototype.constructor = Circle;
// We can encapsulate above two lines in a function for convenience: extend()
extend(Circle, Shape);
// Function overriding
Circle.prototype.draw = function () {
  // Calling base class function
  // Shape.prototype.draw();
  console.log('Drawing the circle');
};

Circle.prototype.area = function () {
  console.log(`Area is ${Math.PI * this.radius * this.radius}`);
};

function Square(side, color) {
  Shape.call(this, color);
  this.side = side;
}
extend(Square, Shape);

Square.prototype.draw = function () {
  console.log('Drawing the square');
};

const s = new Shape('orange');
const c = new Circle(2, 'red');

const shapes = [new Circle(1, 'white'), new Square(4, 'black')];

for (let shape of shapes) {
  shape.draw();
}
