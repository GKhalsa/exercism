function primeFactors(num){
  var factors = [];
  var toOne = num;
  var possibleFactor = 2;

  while(toOne !== 1){
    if (toOne % possibleFactor === 0){
      factors.push(possibleFactor);
      toOne = toOne / possibleFactor;
    } else {
      possibleFactor += 1;
    }
  }
  return factors;
}


var setup = {
  for: primeFactors
};

module.exports = setup;
