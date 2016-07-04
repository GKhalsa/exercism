var Hamming = function() {};

Hamming.prototype.compute = function(first, second) {
  if (first.length != second.length) throw('DNA strands must be of equal length.');

  var count = 0;
  for (var i = 0; i < first.length; i++){
    if (first[i] !== second[i]) count++;
  }
  return count;
};

module.exports = Hamming;
