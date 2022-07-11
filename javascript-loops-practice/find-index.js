/* exported findIndex */
// goal: return the first index which value is
// found inside the array, if not found return -1
// iterate through the array and check each item to see if item is = value
// if array[i] = value, return i, else return -1

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
