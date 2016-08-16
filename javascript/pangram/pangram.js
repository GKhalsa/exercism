var Pangram = function(text){
  this.text = this.santizeText(text);
};

Pangram.prototype.isPangram = function(){
  var uniqueString = "";
  for(var i = 0; i < this.text.length; i++){
    if (uniqueString.indexOf(this.text[i]) === -1){
      uniqueString += this.text[i];
    }
  }
  return uniqueString.length === 26;
};

Pangram.prototype.santizeText = function(string){
  var sanitizedArray = string.match(/[a-z]/gi) || [];
  return sanitizedArray.join("");
};

module.exports = Pangram;
