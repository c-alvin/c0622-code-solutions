/* exported isPalindromic */
// goal: A Boolean indicating whether or not string is a palindrome.
// double for loop, going inside to check if starting
// index is equal to end of index

function isPalindromic(string) {
  var newString = string.replace(' ', '');
  var counter = 1;
  var emptyString = '';

  for (var i = 0; i < newString.length; i++) {
    if (newString[i] !== newString[newString.length - counter]) {
      return false;
    } else {
      emptyString += newString[i];
      counter++;
    }
  }
  if (emptyString === newString) {
    return true;
  }
}
