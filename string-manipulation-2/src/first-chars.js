/* exported firstChars */
// goal: return the first length characters of string
// create empty string.
// iterate through the array depending on length.
// length > string.length, value of variable string assign to newString.
// += the letters to the empty string
// return newString;

function firstChars(length, string) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    if (length > string.length) {
      newString = string;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
