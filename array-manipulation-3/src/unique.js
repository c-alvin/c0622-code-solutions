/* exported unique */
// goal: A new Array containing only the unique elements of array, in the order they first appear in array.
// create an empty hash and array
// iterate through the array and if it exists
// set that value in the hash to +=1 and if not to the value of 1.
// if it already doesn't exist, push that item into the array.
// return array

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
