function accumulate(initialArray, customFunction){
  var result = [];
  for (var i = 0; i < initialArray.length; i++){
    result.push(customFunction(initialArray[i]));
  }
  return result;
}

module.exports = accumulate;
