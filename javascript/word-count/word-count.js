var Words = function(){};

Words.prototype.count = function(word){
  var object = {};
  var words = word.replace(/\s+/, ' ').trim().split(' ');
  words.forEach(function(word){
    word = word.toLowerCase();
    if (typeof object[word] === 'function'){
      object[word] = 1;
      return;
    }
    return object[word] ? object[word]++ : object[word] = 1;
  });
  return object;
};

module.exports = Words;
