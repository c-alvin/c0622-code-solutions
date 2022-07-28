/* exported difference */
// goal: A new Array containing the symmetric difference between first and
//  second. That is, elements are included if they are found in one Array,
// but not the other. The result values are unqiue and their order is
// determined by the order they occur
// create empty hash and array
// if value is undefined delete that key value pair
// if not set that value pair to the value at index
// create another for loop, if the value at key is not undefined
// push that value into the array
// return array

function difference(first, second) {
  var differenceHash = {};
  var emptyArray = [];
  for (var i = 0; i < first.length; i++) {
    var firstArrayItem = first[i];
    if (differenceHash[firstArrayItem] !== undefined) {
      delete differenceHash[firstArrayItem];
    } else {
      differenceHash[firstArrayItem] = firstArrayItem;
    }
  }
  for (var k = 0; k < second.length; k++) {
    var secondArrayItem = second[k];
    if (differenceHash[secondArrayItem] !== undefined) {
      delete differenceHash[secondArrayItem];
    } else {
      differenceHash[secondArrayItem] = secondArrayItem;
    }
  }
  for (var key in differenceHash) {
    if (differenceHash[key] !== undefined) {
      emptyArray.push(differenceHash[key]);
    }
  }
  return emptyArray;
}
