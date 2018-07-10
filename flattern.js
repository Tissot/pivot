'use strict';

Array.prototype.flat = function (depth = 1) {
  return this.reduce((acc, el) => {
    if (depth > 1 && Array.isArray(el)) {
      return acc.concat(el.flat(depth - 1));
    }
    return acc.concat(el);
  }, []);
}

const test = [0, 1, [2, 3, [4, 5], 6, 7], 8, 9];
console.log(test.flat());
// expected: [ 0, 1, 2, 3, [ 4, 5 ], 6, 7, 8, 9 ]
console.log(test.flat(Infinity));
// expected: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]