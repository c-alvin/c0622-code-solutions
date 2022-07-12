/* exported getWords */
// goal: return an array of strings that are word in the string parameter
// split the parameter into segments and put those two separate segments
// into an array
// return array

function getWords(string) {
  var array = [];
  if (string === '') {
    array = [];
  } else {
    array = string.split(' ');
  }
  return array;
}
