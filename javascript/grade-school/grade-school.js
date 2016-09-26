var School = function(){
  this.rosterObject = {};
};

School.prototype.roster = function(student, grade){
  var sortedRoster = this.sortedRoster();
  return sortedRoster;
};

School.prototype.sortedRoster = function(){
  var sortedRoster = {};
  for ( var key in this.rosterObject){
    sortedRoster[key] = this.rosterObject[key].sort();
  }
  return sortedRoster;
};

School.prototype.add = function(student, grade){
  if (this.rosterObject[grade] === undefined ) { this.rosterObject[grade] = []; }
  this.rosterObject[grade].push(student);
};

School.prototype.grade = function(grade){
  if (this.rosterObject[grade] !== undefined) return this.rosterObject[grade].sort();
  return [];
};

module.exports = School;
