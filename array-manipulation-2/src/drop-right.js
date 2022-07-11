/* exported dropRight */
// goal: return an array in this with the elements before the last count;
// create an empty array
// create a for loop starting at intial expression array.length - count
// however, this time conditional expression i >= 0; i--;
// if statement for the scenario in which count > array.length
// if so make newArray = array;
// return newArray

function dropRight(array, count) {
  var dropRightArray = [];
  for (var i = 0; i < array.length - count; i++) {
    if (count > array.length) {
      dropRightArray = array;
    } else {
      dropRightArray.push(array[i]);
    }
  }
  return dropRightArray;
}
