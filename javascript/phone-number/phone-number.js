var PhoneNumber = function(phoneNumber){
  this.phoneNumber = phoneNumber;
};

PhoneNumber.prototype.number = function(){
  var cleanNums = this.phoneNumber.match(/[0-9]/gi).join("");
  if (cleanNums.length === 10) return cleanNums;
  if (cleanNums.length === 11 && cleanNums[0] === '1') return cleanNums.slice(1,11);
  return '0000000000';
};

PhoneNumber.prototype.areaCode = function(){
  return this.phoneNumber.slice(0,3);
};

PhoneNumber.prototype.toString = function(){
  var n = this.phoneNumber;
  return "(" + n.slice(0,3) + ") " + n.slice(3,6) + "-" + n.slice(6,10);
};

module.exports = PhoneNumber;
