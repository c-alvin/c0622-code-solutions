/* exported takeRight */
// goal: return an array consisting of the last count elements of the array
// create an empty array
// create a for loop, iterate through array at array.length - count;
// create an if statement to check if count > array.length,
// if so new array = array
// else newarray.push(array[i])
// return new array

function takeRight(array, count) {
  var rightArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count > array.length) {
      rightArray = array;
    } else {
      rightArray.push(array[i]);
    }
  }
  return rightArray;
}
