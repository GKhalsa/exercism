var letterScores =  {
      A:1, B:3, C:3, D:2,
      E:1, F:4, G:2, H:4,
      I:1, J:8, K:5, L:1,
      M:3, N:1, O:1, P:3,
      Q:10, R:1, S:1, T:1,
      U:1, V:4, W:4, X:8,
      Y:4, Z:10
    };

function score(word){
  return new Scrabble(word).calculateScore();
}

var Scrabble = function(word){
  this.word = word || '';
  this.scoreCount = 0;
};

Scrabble.prototype.calculateScore = function(){
  var betterWord = this.word;
  for(var i = 0; i<betterWord.length;i++){
    this.scoreCount += letterScores[betterWord.toUpperCase()[i]];
  }
  return this.scoreCount;
};

module.exports = score;
