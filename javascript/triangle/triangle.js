var Triangle = function(sideOne,sideTwo,sideThree){
  this.sideOne = sideOne;
  this.sideTwo = sideTwo;
  this.sideThree = sideThree;
};

Triangle.prototype.kind = function(){
  if (this.notTriangle()) throw new Error('that does not seem to be triangle');
  if (this.equilateralCheck()) return "equilateral";
  if (this.isoscelesCheck()) return "isosceles";
  return "scalene";
};

Triangle.prototype.equilateralCheck = function(){
  if (this.sideOne === this.sideTwo && this.sideTwo === this.sideThree){
    return true;
  }
  return false;
};

Triangle.prototype.isoscelesCheck = function(){
  var check = this.sideOne;
  if (this.sideTwo === check || this.sideThree === check || this.sideTwo === this.sideThree){
    return true;
  }
  return false;
};

Triangle.prototype.notTriangle = function(){
  var a = this.sideOne, b = this.sideTwo, c = this.sideThree;
  if (a > b + c || b > a + c || c > a + b || a <= 0 || b <= 0 || c <= 0 ){
    return true;
  }
  return false;
};

module.exports = Triangle;
