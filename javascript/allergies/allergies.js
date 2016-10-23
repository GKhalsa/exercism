var allergyList = {
   1: "eggs",
   2: "peanuts",
   4: "shellfish",
   8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
 128: "cats"
};

var Allergies = function(num){
  this.num = better(num);
  this.allergyNumArray = Object.keys(allergyList).reverse();
};

Allergies.prototype.list = function(){
  var finalAllergies = [];
  while (this.num !==0){
    for(var i = 0; i < this.allergyNumArray.length; i++){
      if (this.allergyNumArray[i] <= this.num){
        finalAllergies.push(allergyList[this.allergyNumArray[i]]);
        this.num -= this.allergyNumArray[i];
      }
    }
  }
  return finalAllergies.reverse();
};

Allergies.prototype.allergicTo = function(allergy){
  return this.list().includes(allergy);
};

function better(num){
  while (num > 256){
    num -= 256;
  }
  return num;
}

module.exports = Allergies;
