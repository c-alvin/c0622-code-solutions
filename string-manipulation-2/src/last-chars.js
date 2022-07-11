/* exported lastChars */
// goal: return last length of characters in string
// create an empty string
// create a for loop to iterate through the array starting at the position of
// string.length -length
// if statement for the condition in which length > string.length
// value of string is assigned to reverseChars
// else string[i] is assigned to reverse chars
// return reverseChars

function lastChars(length, string) {
  var reverseChars = '';
  for (var i = string.length - length; i < string.length; i++) {
    if (length > string.length) {
      reverseChars = string;
    } else {
      reverseChars += string[i];
    }
  }
  return reverseChars;
}
