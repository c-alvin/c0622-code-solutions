/* exported tail */
// goal return a new array containing all elements of the array after the first.
// iterate through the array and add each position to the new array starting at index 1

function tail(array) {
  var tail = [];
  for (var i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
}
