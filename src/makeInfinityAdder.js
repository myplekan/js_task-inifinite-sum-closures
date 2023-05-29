'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result = 0;
  const adder = (a) => {
    if (a !== undefined) {
      sum += a;

      return adder;
    }
    result = sum;
    sum = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
