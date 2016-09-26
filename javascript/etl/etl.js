var ETL = function(){};

ETL.prototype.transform = function(oldCode){
  refactoredCode = {};
  for (var key in oldCode){
    for(var i = 0; i < oldCode[key].length; i++ ){
      refactoredCode[oldCode[key][i].toLowerCase()] = parseInt(key);
    }
  }
  return refactoredCode;
};

module.exports = ETL;
