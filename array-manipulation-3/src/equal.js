/* exported equal */
// goal: A Boolean indicating whether or not first and second are equal to each other, index-for-index.
// use hash man to increment by 1  for first array
// decrement by 2nd array if hash map !== 0 not equal
// create an empty array
// create a for loop to iterate through one of the strings
// if index at i of both the strings is equal push that value into the new array
// if at any point they do not equal return false, else return true;

function equal(first, second) {
  var newArray = [];
  for (var i = 0; i < second.length; i++) {
    if (second[i] === first[i]) {
      newArray.push(second[i]);
    }
    if (second[i] !== first[i]) {
      return false;
    }
  }
  return true;
}
