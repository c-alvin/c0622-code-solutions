/* exported numVowels */
// goal: return number of vowels in a string
// create a new array for all vowels, including uppercase
// create a counter variable that is 0
// we have to check if each letter of the string is equal to ANY of the vowels.
// create a for a loop to iterate the string and check if each string at
// every index is = to ANY of the items in array vowels
// if so incrememt numOfVowels by 1.
// return numOfVowels

function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var numOfVowels = 0;
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (letter === vowels[0] || letter === vowels[1] || letter === vowels[2] ||
      letter === vowels[3] || letter === vowels[4] || letter === vowels[5] ||
      letter === vowels[6] || letter === vowels[7] || letter === vowels[8] ||
      letter === vowels[9]) {
      numOfVowels++;
    }
  }
  return numOfVowels;
}
