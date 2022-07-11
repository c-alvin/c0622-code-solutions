/* exported filterOutStrings */
// goal = return a new array containing all of the origin input values xcept strings
// create new variable that is an empty array literal
// iterate through each item in array
// check if each item is a string,
// return array

function filterOutStrings(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      array.push(values[i]);
    }
  }
  return array;
}
