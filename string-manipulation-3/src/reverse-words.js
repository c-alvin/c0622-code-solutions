/* exported reverseWords */
// goal: A version of String with every character of each word reversed,
// but the words in their original order.
// split the string into an array by space
// iterate through each item in the array and iterate through the
// words backwords and add to empty string.

function reverseWords(string) {
  var splitArray = string.split(' ');
  var emptyString = '';

  for (var i = 0; i < splitArray.length; i++) {
    var word = splitArray[i];
    emptyString += ' ';
    for (var k = word.length - 1; k >= 0; k--) {
      emptyString += word[k];
    }
  }
  return emptyString.trim();
}
