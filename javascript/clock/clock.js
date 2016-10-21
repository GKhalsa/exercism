function at(hour, min){
  return new Clock(hour,min);
}

var Clock = function(hour, min){
  this.hour = hour || 0;
  this.min  = min || 0;
  this.minCount = 0;
};

Clock.prototype.toString = function(){
  var hour,min;
  this.minCount += this.totalMin();
  [hour,min]   = this.generateTime(this.minCount);
  return leftPad(hour) + ":" + leftPad(min);
};

Clock.prototype.equals = function(clock){
  return this.toString() === clock.toString();
};

Clock.prototype.generateTime = function(totalMin){
  var hour = Math.floor(totalMin / 60) % 24;
  var min  =  totalMin % 60;
  return [hour,min];
};

Clock.prototype.totalMin = function(){
  var addedUpMin = (this.hour * 60) + this.min ;
  if (addedUpMin < 0){
    while(addedUpMin < 0){
      addedUpMin += 1440;
    }
  }
  return addedUpMin;
};

Clock.prototype.plus = function(min){
  this.min += min;
  return this;
};

Clock.prototype.minus = function(min){
  this.min -= min;
  return this;
};

function leftPad(num){
  var stringNum = "" + num;
  return "00".substring(0, 2 - stringNum.length) + stringNum;
}

module.exports.at = at;
