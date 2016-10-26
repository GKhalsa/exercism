var Trinary = function(trinaryString){
  this.trinaryString = trinaryString;
};

Trinary.prototype.toDecimal = function(){
  if (nonTrinary(this.trinaryString)){return 0;}

  var result = 0;
  this.trinaryString.split("").forEach(function(num,index){
    result += num * Math.pow(3, this.trinaryString.length - (index + 1));
  }.bind(this));
  return result;
};

  function nonTrinary(string){
    for (var i = 0; i<string.length; i++){
      if (string[i] !== '0' && string[i] !== '1' && string[i] !== '2'){
        return true;
      }
    }
  }

module.exports = Trinary;
