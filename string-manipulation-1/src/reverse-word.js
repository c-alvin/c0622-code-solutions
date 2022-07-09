/* exported reverseWord */
// goal: return javascript string containing the chars of word in reverse
//

function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
