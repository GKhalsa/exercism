var conversionChart = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
};

function toRoman(num){
  return new RomanNumeral(num).convert();
}

var RomanNumeral = function(num){
  this.num = num;
};

RomanNumeral.prototype.convert = function(){
  conversion = "";
  conversionKeys = Object.keys(conversionChart).reverse();
  while(this.num > 0){
    for (var i = 0; i < conversionKeys.length; i++){
      while (conversionKeys[i] <= this.num ){
        conversion += conversionChart[conversionKeys[i]];
        this.num -= conversionKeys[i];
      }
    }
  }
  return conversion;
};

module.exports = toRoman;
