'use strict';

function throttle(func, wait = 0) {
  let last;
  return (...args) => {
    const now = new Date;
    if (!last || now - last >= wait) {
      func(...args);
      last = now;
    }
  };
}

let count = 1;
const test = throttle(console.log, 1000);
test(count++);
test(count++);
setTimeout(() => {
  test(count++);
  setTimeout(() => {
    test(count++);
    setTimeout(() => test(count++), 1200);
  }, 800);
}, 1200);
// expected: 1 3 5
