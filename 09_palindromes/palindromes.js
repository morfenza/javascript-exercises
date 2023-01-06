const palindromes = function (string) {

  aux = string.toLowerCase().replace(/[^a-z]/g, "")

  if ((aux) === (aux.split('').reverse().join(''))) {
    return true
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = palindromes;
