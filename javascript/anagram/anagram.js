var Anagram = function(anagram){
  this.anagram = anagram.toLowerCase();
};

Anagram.prototype.matches = function(...wordArray){
  return [].concat.apply([], wordArray).filter(function(word){
    return this.wordCheck(word.toLowerCase());
  }.bind(this));
};

Anagram.prototype.wordCheck = function(word){
  var sharedLetters = "";
  if (word.length === this.anagram.length){
    for(var i = 0 ; i < word.length; i++){
      if(this.anagram.indexOf(word[i]) !== -1){
        if(sharedLetters.indexOf(word[i]) === -1 || (this.anagram.split(word[i]).length - 1) === (word.split(word[i]).length - 1) ){
          sharedLetters += word[i];
        }
      }
    }
  }
  return sharedLetters.length === this.anagram.length && sharedLetters !== this.anagram;
};

module.exports = Anagram;
