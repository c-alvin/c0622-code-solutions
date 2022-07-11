/* exported take */
// goal: return a new array containing the first count
// elements of array
// create an empty array
// loop through the array based on the count varaible
// create if statement for scenario in which
// count > array.length, firstArray = array;
// else push those new values into the empty array
// return new array

function take(array, count) {
  var firstArray = [];
  for (var i = 0; i < count; i++) {
    if (count > array.length) {
      firstArray = array;
    } else {
      firstArray.push(array[i]);
    }
  }
  return firstArray;
}
