'use strict';

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
