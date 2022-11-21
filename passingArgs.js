// call by value
let number = 10;

function inrease(number) {
  number++;
}

inrease(number);
console.log(number);

// call by reference

let obj = { value: 10 };

function inrease(obj) {
  obj.value++;
}

inrease(obj);
console.log(obj.value);
