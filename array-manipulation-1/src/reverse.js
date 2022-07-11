/* exported reverse */
// goal: return a new array containg all elements of the array in reverse order
// assign array to new variable
// iterate through item in the array but backwards
// return array

function reverse(array) {
  var reverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}
