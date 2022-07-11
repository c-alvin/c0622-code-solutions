/* exported filterOutNulls */
// goal = return a new array containing all of the origin input values xcept null
// create new variable that is an empty array literal
// iterate through each item in array
// check if each item in the array is equal to null, if not enter into array.
// return array

function filterOutNulls(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      array.push(values[i]);
    }
  }
  return array;
}
