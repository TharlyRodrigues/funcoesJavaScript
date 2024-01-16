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
f();*/

// Regular Functions vs. Arrow Functions
