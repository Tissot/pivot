'use strict';

function throttle(func, wait = 0) {
  let timer;
  let last;
  return (...args) => {
    if (!last) {
      func(...args);
      last = Date.now();
    } else {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        if (Date.now() - last >= wait) {
          func(...args);
          last = Date.now();
        }
      }, wait - (Date.now() - last));
    }
  }
}

let count = 1;
const test = throttle(console.log, 1000);
test(count++);
test(count++);
test(count++);
setTimeout(() => {
  test(count++);
  setTimeout(() => {
    test(count++);
    setTimeout(() => test(count++), 1200);
  }, 700);
}, 1300);

// expected: 1 3 5 6
