/* exported includesSeven */
// goal: return a boolean idnicating whether or not the number 7 is in the array
// create a loop to iterate through the array
// check if each item at i index is = the number 7, if any number is 7 return true, else return false
// return appropriate boolean value

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
