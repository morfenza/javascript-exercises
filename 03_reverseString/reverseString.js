const reverseString = function(string) {
  
  if (string === '') return '';
  
  const stringArray = string.split('');
  const answerArray = [];

  for (let i = stringArray.length - 1; i >= 0; i--) {
    answerArray.push(stringArray[i]);
  }

  let answerString = answerArray.join('');

  return answerString;

};

// Do not edit below this line
module.exports = reverseString;
