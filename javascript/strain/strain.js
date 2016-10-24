var Strain = function(){};

Strain.prototype.keep = function(initialArray, customFunction){
  var result = customFilter(initialArray, customFunction, true);
  return result;
};

Strain.prototype.discard = function(initialArray, customFunction){
  var result = customFilter(initialArray, customFunction, false);
  return result;
};

function customFilter(initialArray, customFunction, type){
  var result = [];
  for (var i = 0; i < initialArray.length; i++){
    if (customFunction(initialArray[i])){
      if (type) {result.push(initialArray[i]);}
    } else if ( !type){ result.push(initialArray[i]);}
  }
  return result;
}

var obj = new Strain();

module.exports = obj;
