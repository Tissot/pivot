'use strict';

function thousandFormat(val) {
  return String(val).replace(/\d+/, int => int.replace(/\d{1,3}(?=(\d{3})+$)/g, str => str + ','));
}

const test = 1234567890.12;
console.log(thousandFormat(test));
// expected: 1,234,567,890.12