'use strict';
/*
function calcAge(brithYear) {
  const age = 2037 - brithYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${brithYear}`;
    console.log(output);

    if (brithYear >= 1981 && brithYear <= 1995) {
      var millenial = true;

      output = 'New OUTPUT';

      const firstName = 'steven';
      const str = `oh, and you're a millennial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'jonas';
calcAge(1995);

console.log(me);

//////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// The this Keyword in Practice

// console.log(this);

const calcAge = function (brithYear) {
  console.log(2037 - brithYear);
  // console.log(this);
};
calcAge(1995);

console.log(this);

const calcAgeArrow = brithYear => {
  console.log(2037 - brithYear);
  // console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

// Regular Functions vs. Arrow Functions

// var firstName = 'matilda';
const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // solution 1

    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);

    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


// Primitives vs. Objects (Primitive vs. Reference Types)

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('me', me);
// primitive types
let lastName = 'william';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'david';
console.log('before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// copying objects
const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'David';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('tharly');

console.log('before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);*/
