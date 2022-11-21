// factory function
function circleFactory(radius) {
  return {
    radius,
    area: function () {
      console.log('factory:Area is:' + Math.PI * this.radius * this.radius);
    },
  };
}
const circle = circleFactory(3);
circle.area();

// constructor
function Circle(radius) {
  // Adding private properties to object
  let defaultLocation = {
    x: 0,
    y: 0,
  };
  // Adding private properties to methods
  let getCircumference = function () {
    //....
  };
  (this.radius = radius),
    (this.area = function () {
      console.log('constructor:Area is:' + Math.PI * this.radius * this.radius);
    });
  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      console.log(defaultLocation);
    },
    set: function (val) {
      if (!val.x || !val.y) console.log('Invalid params');
      defaultLocation = val;
    },
  });
}

const circle2 = new Circle(3);
circle2.area();

// Using call method
const circle3 = {};
Circle.call(circle3, 3);
circle3.area();

// adding/deleting properties
circle2.color = 'red';
circle3['color'] = 'blue';
delete circle2.color;
delete circle3['color'];
console.log(circle2, circle3);

// enumerating over the properties of object
for (let key in circle2) {
  if (typeof circle2[key] !== 'function') console.log(key);
}
// to get all the keys at once
const props = Object.keys(circle3);
console.log(props);
if ('radius' in circle2) console.log('Yes radius is in circle2');

// setter
circle2.defaultLocation = {
  x: 1,
  y: 3,
};
// getter
circle2.defaultLocation;
// apply is same as call just that the argument we pass in apply can be array
// Points to keep in mind:
// 1 Every object has property called constructor which stores the constructor of it
// 2 Object created using object literal templates have Object as constructor
