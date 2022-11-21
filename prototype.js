// Prototype: Prototypes are the mechanism by which JavaScript objects inherit features from one another.
let x = { name: 'akash' };
let y = {};
if (Object.getPrototypeOf(x) === Object.getPrototypeOf(y))
  console.log('Every object in JS refers same Prototype object(object base)');

const objBase = Object.getPrototypeOf(x);
const descriptor = Object.getOwnPropertyDescriptor(objBase, 'toString');
console.log(descriptor);

// Defining the properties of an object
Object.defineProperty(x, 'name', {
  writable: true, // let us edit its value
  enumerable: true, // let us access this property
  configurable: true, // let us delete this property
});

function Circle(radius) {
  // Instance members
  this.radius = radius;
}

// Instead of defining draw method for every object separately we can define it
// in the prototype of the object

// Prototype members
Circle.prototype.draw = function () {
  console.log('Drawing circle');
};

Circle.prototype.toString = function () {
  console.log(`Circle of radius ${this.radius}`);
};
const c1 = new Circle(1);
const c2 = new Circle(1);
c1.toString();

// Insatnace members
console.log(Object.keys(c1));

// Prototype members
for (let key in c1) console.log(key);
