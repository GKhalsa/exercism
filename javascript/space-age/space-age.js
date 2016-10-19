var SpaceAge = function(seconds){
  this.seconds = seconds;
};

SpaceAge.prototype.onEarth = function(){
  return Number((this.seconds / 31557600).toFixed(2));
};

SpaceAge.prototype.onMercury = function(){
  return this.yearCalculator(4.1519);
};

SpaceAge.prototype.onVenus = function(){
  return this.yearCalculator(1.624);
};

SpaceAge.prototype.onMars = function(){
  return this.yearCalculator(0.5316);
};

SpaceAge.prototype.onJupiter = function(){
  return this.yearCalculator(0.0843);
};

SpaceAge.prototype.onSaturn = function(){
  return this.yearCalculator(0.0340);
};

SpaceAge.prototype.onUranus = function(){
  return this.yearCalculator(0.0118953);
};

SpaceAge.prototype.onNeptune = function(){
  return this.yearCalculator(0.00607);
};

SpaceAge.prototype.yearCalculator = function(delta){
  return Number((this.onEarth() * delta).toFixed(2));
};

module.exports = SpaceAge;
