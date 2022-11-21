function mixin(target, ...source) {
  Object.assign(target, ...source);
}
const canEat = {
  eat: function () {
    this.hunger--;
    console.log('Eating');
  },
};

const canWalk = {
  walk: function () {
    console.log('Walking');
  },
};

const canSwim = {
  swim: function () {
    console.log('Swiming');
  },
};

function Person() {}
const p = new Person();
mixin(Person.prototype, canEat, canWalk);
