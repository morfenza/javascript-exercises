const getTheTitles = function(arr) {
  
  let titles = []

  arr.forEach(element => {
    titles.push(element.title)
  });

  return titles
};

// alternative -> return array.map(book => book.title);

// Do not edit below this line
module.exports = getTheTitles;
