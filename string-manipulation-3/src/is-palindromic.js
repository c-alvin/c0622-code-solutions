/* exported isPalindromic */
// goal: A Boolean indicating whether or not string is a palindrome.
// check if first value and last value are equal if not , not a palindrome
// else add the values of newstring at index to empty string
// if empty string == new string palindrome.

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
