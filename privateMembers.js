// Approach 1: using symbols
const _radius = Symbol(); // Symbol returns unique identifier
const _draw = Symbol();
class Circle {
  constructor(radius) {
    this[_radius] = radius; // private property
  }
  [_draw]() {
    // Private method
    console.log('Drawing');
  }
}

// Accessing private members(Symbols)
const c = new Circle(2);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);

// Approach 2: Using WeakMap
const _side = new WeakMap(); // WeakMap is like dictionary wehere keys are object and values can be anything
const _inc = new WeakMap();
class Square {
  constructor(side) {
    _side.set(this, side); // Here we will not be able to see this private prop inside objetc and proto
    _inc.set(this, (n) => {
      // We have to use arrow function since in class is default evaluated under strict mode and this will be undefined in normal functions
      _side.set(this, side + n); // Private method
      console.log(_side.get(this));
    });
  }
  // getter:
  get side() {
    return _side.get(this);
  }
  // setter
  set side(val) {
    if (val <= 0) throw new Error(' Invalid side');
    _side.set(this, val);
  }
  draw() {
    console.log(`drawing square of ${_side.get(this)} units`);
  }
  incrementByN(n) {
    // Abstraction
    _inc.get(this)(n);
  }
}

const s = new Square(4);
s.draw();
