/* exported capitalizeWord */
// goal: returns word with its first chacater uppercased, rest
// lowercased except when it the value is 'Javascript'
// check if word[0]upper case and word slice lower case = Javascript if so
// return JavaScript else
// return string[0].toUpperCase
// concantenate with word[1].slice.toLowerCase
function capitalizeWord(word) {
  if (word[0].toUpperCase() + word.slice(1).toLowerCase() === 'Javascript') {
    return 'JavaScript';
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
