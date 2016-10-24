var alphabet = "abcdefghijklmnopqrstuvwxyz";

var AtbashCipher = function(){};

AtbashCipher.prototype.encode = function(wordString){
  var betterString = stringCleaner(wordString);
  var encodedString = "";
  for (var i = 0; i< betterString.length; i++){
    encodedString += cipher(betterString[i]);
  }
  return encodedString.match(/.{1,5}/g).join(" ");
};

function cipher(char){
  if(!isNaN(char)){
    return char;
  } else {
    var index = alphabet.indexOf(char);
    return alphabet[25 - index];
  }
}

function stringCleaner(string){
  return string.toLowerCase().replace(/[^a-z0-9]/g,'');
}

var obj = new AtbashCipher();

module.exports = obj;
