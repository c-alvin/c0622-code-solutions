/* exported intersection */
// goal: A new Array containing unique values found in both first and second.
// The order of result values is determined by the order they occur.
// create empty array and empty hash
// for loop through both the arrays and if if hash at index exists
// increment by 1, if not set value to 1
// create another loop and if value at key is not !== 1
// push that hash at key to the array
// return array

function intersection(first, second) {
  var intersectionHash = {};
  var emptyArray = [];

  for (var i = 0; i < first.length; i++) {
    var index = first[i];
    if (intersectionHash[index] !== undefined) {
      intersectionHash[index] += 1;
    } else {
      intersectionHash[index] = 1;
    }
  }

  for (var k = 0; k < second.length; k++) {
    var secondIndex = second[k];
    if (intersectionHash[secondIndex] !== undefined) {
      intersectionHash[secondIndex] = secondIndex;
    } else {
      intersectionHash[secondIndex] = 1;
    }
  }

  for (var key in intersectionHash) {
    if (intersectionHash[key] !== 1) {
      emptyArray.push(intersectionHash[key]);
    }
  }

  return emptyArray;
}
