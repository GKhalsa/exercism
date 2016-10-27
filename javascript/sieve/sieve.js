var Sieve = function(num){
  this.primes = findPrimes(num);
};

function findPrimes(num){
  var possiblePrimes = generateNumArray(num);
  for (var i = 0; i < possiblePrimes.length; i++){
    for (var x = i+1; x < possiblePrimes.length; x ++){
      if (possiblePrimes[x] % possiblePrimes[i] === 0){
        possiblePrimes.splice(x,1);
        x -= 1;
      }
    }
  }
  return possiblePrimes;
}

function generateNumArray(num){
  var array = [];
  for(var i = 2; i <= num; i ++){
    array.push(i);
  }
  return array;
}

module.exports = Sieve;
