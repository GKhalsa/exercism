var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(strand) {
  var sequence = "";
  for(var i = 0; i < strand.length; i++){
    if (strand[i] === "C") sequence += "G";
    if (strand[i] === "G") sequence += "C";
    if (strand[i] === "A") sequence += "U";
    if (strand[i] === "T") sequence += "A";
  }
  return sequence;
};

module.exports = DnaTranscriber;
