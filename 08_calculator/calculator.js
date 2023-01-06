const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let total = arr.reduce((acc, cur) => {
    return acc += cur
  }, 0);
  return total;
};

const multiply = function(arr) {
  let total = arr.reduce((acc, cur) => {
    return acc *= cur
  });
  return total;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let total = 1;
  let cur = 1;
  while (cur <= a) {
    total = total * cur
    cur++
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
