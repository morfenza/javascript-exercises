const fibonacci = function(max) {
  if (max < 0) return 'OOPS';

  const arr = [1, 1];
  
  while (arr.length < max) {
    aux = arr[arr.length - 1] + arr[arr.length - 2]
    arr.push(aux)
  }
  
  return arr[arr.length - 1]

};

// Do not edit below this line
module.exports = fibonacci;
