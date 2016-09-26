var Robot = function(){
  this.name = this.generateName();
};

Robot.prototype.name = function(){
  return this.name;
};

Robot.prototype.generateName = function(){
  var name = "";

  for (var i = 0; i < 2;i++){
    name += String.fromCharCode(97 + Math.floor(Math.random() * 26)).toUpperCase();
  }
  for (var y = 0; y < 3;y++){
    name += Math.floor(Math.random() * 9) + 1;
  }

  if (names.indexOf(name) === -1) {names.push(name); return name; }
  return this.generateName();
};

Robot.prototype.reset = function(){
  this.name = this.generateName();
};

var names = [];
module.exports = Robot;
