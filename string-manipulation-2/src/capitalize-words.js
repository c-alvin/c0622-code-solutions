/* exported capitalizeWords */
// goal: uppercase each new word in string and lower case all the others
// assign a new array = string.split(' ')
// create a new var that is an empty string
// iterate through for loop based on new array.length
// create assign the value of capitalize[i] to var word
// newstring += word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ';
// return newString.trimEnd to take out white spaces.

function capitalizeWords(string) {
  var capitalize = string.split(' ');
  var newString = '';
  for (var i = 0; i < capitalize.length; i++) {
    var word = capitalize[i];
    newString += word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ';
  }
  return newString.trimEnd();
}
