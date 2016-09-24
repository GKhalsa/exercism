var BeerSong = function(){};

BeerSong.prototype.verse = function(num){
  if (num > 1) { return this.normalVerse(num);}
  if ( num === 1) { return this.endVerse();}
  return this.ending();
};

BeerSong.prototype.ending = function(){
  return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
};

BeerSong.prototype.endVerse = function(){
  return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
};

BeerSong.prototype.normalVerse = function(num){
  return num + ' bottles of beer on the wall, '+ num + ' bottles of beer.\nTake one down and pass it around, ' + (num - 1) + ' bottles of beer on the wall.\n';
};

BeerSong.prototype.sing = function(startingVerse, endingVerse = 0){
  var song = "";
  for (var i = startingVerse; i >= endingVerse; i --){
    song += this.verse(i) + "\n";
  }
    return song.trim() + "\n";
};


module.exports = BeerSong;
