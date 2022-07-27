/* exported unique */
// goal: A new Array containing only the unique elements of array, in the order they first appear in array.

function unique(array) {
  var uniqueHash = {};
  var uniqueArray = [];

  for (var i = 0; i < array.length; i++) {
    var uniqueItem = array[i];
    if (uniqueHash[uniqueItem] !== undefined) {
      uniqueHash[uniqueItem] += 1;
    } else {
      uniqueHash[uniqueItem] = 1;
      uniqueArray.push(uniqueItem);
    }
  }
  return uniqueArray;
}
