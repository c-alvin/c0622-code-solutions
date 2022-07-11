/* exported initial */
// goal: return a new array containing all elements except the last.
//  iterate through the array
//  add each item from the 2nd to last to the beginning and push those into the new array
// return array

function initial(array) {
  var initial = [];
  for (var i = 0; i < array.length - 1; i++) {
    initial.push(array[i]);
  }
  return initial;
}
