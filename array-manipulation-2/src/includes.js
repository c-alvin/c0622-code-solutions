/* exported includes */
// goal: return a boolean indicating presence
// of value at any index of array
// create a for loop that iterates through the entire
// array,
// check if value is stricly === to array[index]
// return true to check through whole array
// return false after for loop

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
