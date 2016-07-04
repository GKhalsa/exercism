var Bob = function() {};

Bob.prototype.hey = function(input) {

  if(allSpaces(input)){
  return 'Fine. Be that way!';
} else if(allCaps(input)){
    if (allNum(input)){
      return 'Whatever.';
    } else if (onlyNumAndQuestion(input)){
      return 'Sure.';
    } else {
      return 'Whoa, chill out!';
    }
  } else if(isAQuestion(input)){
    return 'Sure.';
  } else {
    return 'Whatever.';
  }

  function onlyNumAndQuestion(input){
    return /^\d+$/.test(input.replace('?',''));
  }

  function allSpaces(input){
    return (input.replace(/ /g,'')) === '';
  }

  function isAQuestion(input){
    return input.slice(-1) === '?';
  }

  function allCaps(input){
    return input.toUpperCase() === input;
  }

  function allNum(input){
    return /^\d+$/.test(input.replace(/,/g,''));
  }

};

module.exports = Bob;
