pry = require('pryjs');

var Isogram = function(word){
  this.word = word;
  eval(pry.it)

};

Isogram.prototype.isIsogram = function(){
  var wordArray = this.word.toLowerCase().replace(/ |-/g,'').split('');

  var filtered =  wordArray.filter(function(letter, i){
    return wordArray.indexOf(letter) === i;
  });

  return wordArray.length === filtered.length;
};

module.exports = Isogram;
