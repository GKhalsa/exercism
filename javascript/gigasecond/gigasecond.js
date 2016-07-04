function Gigasecond(date){
  this.initialDate = date;
}

Gigasecond.prototype.date = function(){
  var seconds = this.initialDate.getTime() + 1000000000000;
  return new Date(seconds);

};


module.exports = Gigasecond;
