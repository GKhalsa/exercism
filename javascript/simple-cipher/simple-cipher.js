var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var Cipher = function(key){
  this.key = validateKey(key) || 'aaaaaaaaaa';
};

Cipher.prototype.encode = function(string){
  var encodedString = '';
  for(var i = 0; i < string.length; i ++){
    keyIndex = alphabet.indexOf(this.key[i]) % 25;
    stringIndex = alphabet.indexOf(string[i]) % 25;
    encodedString += alphabet[keyIndex + stringIndex];
  }
  return encodedString;
};

Cipher.prototype.decode = function(string){
  var decodedString = '';
  for(var i = 0; i < string.length; i ++){
    keyIndex = alphabet.indexOf(this.key[i]) % 25;
    stringIndex = alphabet.indexOf(string[i]) % 25;
    decodedString += alphabet[stringIndex - keyIndex];
  }
  return decodedString;
};

function validateKey(key){
  var keyLength = key === '';
  if (/[A-Z0-9]/.test(key) || keyLength) {
    throw new Error('Bad key');
  }
  return key;
}


module.exports = Cipher;
