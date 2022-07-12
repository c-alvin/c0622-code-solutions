/* exported isVowel */
// goal: return a boolean value idnicating whether or not char is a vowel, can handle
// both lowercase and upper case values
//  create new array [aeiou].
// check if each value of the array is = new array value, if so its a vowel

function isVowel(char) {
  var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowel.length; i++) {
    if (char === vowel[i]) {
      return true;
    }
  }
  return false;
}
