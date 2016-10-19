var BigInt = require('./big-integer');

var Grains = function(){};

Grains.prototype.square = function(tile){
  return this.calculate(tile).toString();
};

Grains.prototype.total = function(){
  var count = BigInt(0);
  for(var i = 1; i <= 64; i++){
    count = count.add(this.calculate(i));
  }
  return count.toString();
};

Grains.prototype.calculate = function(tile){
  grainCount = BigInt(0);
  for(var i = 1; i <= tile; i++){
    if (grainCount.toString() === '0'){
      grainCount = BigInt(1);
    } else if (grainCount.toString() === '1'){
      grainCount = BigInt(2);
    } else {
      grainCount = BigInt(2).pow(i - 1);
    }
  }
  return grainCount;
};

module.exports = Grains;
