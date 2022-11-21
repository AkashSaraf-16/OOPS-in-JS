class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log('Moving');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log('Drawing');
  }
  move() {
    // overriding
    super.move(); // we can call move of parent also
    console.log('Moving Cirle');
  }
}

const c = new Circle('orange', 4);
