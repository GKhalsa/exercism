function parse(string){
  var result = "";
  var sanitizedString = sanitize(string);
  for (var i = 0; i < sanitizedString.length; i++){
    result += sanitizedString[i][0];
  }
  return result.toUpperCase();
}

function sanitize(string){
  var sanitizedString = string.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[-]/g, ' ');
  var splitString = sanitizedString.split(" ");
  return splitString;
}

module.exports.parse = parse;
