const removeFromArray = function(array, ...values) {

  let answer = array.filter((element) => {
    
    return !values.includes(element)

  });

  return answer

};


// Funciona em uma linha utilizando:
// const removeFromArray = (array, ...values) => (array.filter((element) => !values.includes(element)));

// Do not edit below this line
module.exports = removeFromArray;
