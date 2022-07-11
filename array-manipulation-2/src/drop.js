/* exported drop */
// goal: return a newarray containing the elements
// of array after the first count elements
// create an empty array
// create a loop with initializing expression
// of i = count
// push those values into empty array
// return array;

function drop(array, count) {
  var dropArray = [];
  for (var i = count; i < array.length; i++) {
    dropArray.push(array[i]);
  }
  return dropArray;
}
