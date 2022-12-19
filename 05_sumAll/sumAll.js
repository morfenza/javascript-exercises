const sumAll = function(init, last) {
  let sum = 0;
  let counter = 0;

  if (init < 0 || last < 0 || typeof init !== 'number' || typeof last !== 'number'){
    return "ERROR";
  }

  if (init < last) {
    counter = init;

    while (counter <= last) {
      sum += counter;
      counter++;
    }
  } else if (init > last) {
    counter = last;
      
    while (counter <= init) {
      sum += counter;
      counter++;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
