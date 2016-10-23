var Binary = function(binaryString){
  this.binaryString = binaryString;
};

Binary.prototype.toDecimal = function(){
  if (inputCheck(this.binaryString)){return 0;}

  var count = 0;
  this.binaryString.split("").forEach(function(digit, index){
    count +=  digit * Math.pow(2, (this.binaryString.length - (index + 1)));
  }.bind(this));
  return count;
};

function inputCheck(binaryString){
  for (var i = 0; i < binaryString.length; i ++){
    if (binaryString[i] !== '0' && binaryString[i] !== '1'){
      return true;
    }
  }
}

module.exports = Binary;
