var Raindrops = function(){};

Raindrops.prototype.convert = function(num){
  var rain = "";
  if (num % 3 === 0) {rain += "Pling";}
  if (num % 5 === 0) {rain += "Plang";}
  if (num % 7 === 0) {rain += "Plong";}
  if (rain.length !== 0){return rain;}
  return num.toString();
};

module.exports = Raindrops;
