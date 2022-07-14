/* exported truncate */
// goal: makes string length variable long and appends an ellipsis
// set a variable to an empty string
// iterate through array based on length
// if statement to check if length > string.length
// if it is truncate = string; else truncate += string[i]
// return string + '...';

function truncate(length, string) {
  var truncate = '';
  for (var i = 0; i < length; i++) {
    if (length > string.length) {
      truncate = string;
    } else {
      truncate += string[i];
    }
  }
  return truncate + '...';
}
