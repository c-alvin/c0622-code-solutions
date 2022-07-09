/* exported isUpperCased */
// goal: return a boolean value indicating whether or not ALL characters
// in the word are uppcased
// check each string value to see if lower case or upper case, if all string
// values are upper case , boolean true, if any are lower, false.

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
