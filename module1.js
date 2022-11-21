// Private prop
const _radius = new WeakMap();
// Public Props
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log(`Drawing the circle of radius ${_radius.get(this)}`);
  }
}
// CommonJS module
module.exports = Circle;
