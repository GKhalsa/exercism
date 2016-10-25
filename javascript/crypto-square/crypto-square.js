var Crypto = function(unencryptedString){
  this.unencryptedString = unencryptedString;
};

Crypto.prototype.normalizePlaintext = function(){
  return this.unencryptedString.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
};

Crypto.prototype.size = function(){
  var columnSize = 1;
  while(!sizeCheck(this.normalizePlaintext().length, columnSize)){
    columnSize ++;
  }
  return columnSize;
};

Crypto.prototype.plaintextSegments = function(){
  var column = 6;
  return this.normalizePlaintext().match(new RegExp(".{1,"+ this.size() + "}",'gi'));
};

Crypto.prototype.ciphertext = function(){
  var encrypted = "";

  for ( var column = 0; column < this.plaintextSegments()[0].length; column++){
    for(var row = 0; row < this.plaintextSegments().length; row++ ){
      encrypted += this.plaintextSegments()[row][column] || '';
    }
  }

  return encrypted;
};

function sizeCheck(stringSize, columnSize){
  var row = Math.ceil(stringSize / columnSize);
  return columnSize - row === 0 || columnSize - row === 1;
}

module.exports = Crypto;
