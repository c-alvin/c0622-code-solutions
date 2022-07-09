/* exported isLowerCased */
// goal:  return boolean if all characters are lower cased, true, else false
// create an if statement to see if the value of word is striclty equal to
// .toLowerCase method of word object.  If so return true else false.
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
