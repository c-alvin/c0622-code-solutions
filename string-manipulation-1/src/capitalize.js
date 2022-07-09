/* exported capitalize */
// goal: return the original word but with its first character uppercased
// string[0] .toUpperCase, concatenate rest of string with upper case first letter
// along with lower casing the stirng from slice.

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
