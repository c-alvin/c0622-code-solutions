/* exported compact */
// goal: need to remove falsy values from an array and make it compact
// create an an array with all falsy values
// iterate through array, if array[i] is truthy push value to array if not,
// omit falsy values from array

function compact(array) {
  var compact = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compact.push(array[i]);
    }
  }
  return compact;
}
