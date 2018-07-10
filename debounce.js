'use strict';

function debounce(func, wait = 0) {
  let timer;
  return (...args) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => func(...args), wait);
  };
}

let count = 1;
const test = debounce(console.log, 1000);
test(count++);
test(count++);
setTimeout(() => {
  test(count++);
  setTimeout(() => {
    test(count++);
    setTimeout(() => test(count++), 1200);
  }, 800);
}, 1200);
// expected: 2 4 5
