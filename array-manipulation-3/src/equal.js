/* exported equal */
// goal: A Boolean indicating whether or not first and second are equal to each other, index-for-index.
// use hash man to increment by 1  for first array
// decrement by 2nd array if hash map !== 0 not equal

// function equal(first, second) {
//   var equalHash = {};
//   for (var i = 0; i < first.length; i++) {
//     var item = first[i];
//     if (equalHash[item] !== undefined) {
//       equalHash[item] += 1;
//     } else {
//       equalHash[item] = 1;
//     }
//   }
//   for (var k = 0; k < second.length; k++) {
//     var item2 = second[k];
//     if (equalHash[item2] !== undefined) {
//       equalHash[item2] -= 1;
//     } else {
//       equalHash[item2] = 1;
//     }
//   }
//   console.log(equalHash);
//   for (var key in equalHash) {
//     if (equalHash[key] !== 0) {
//       return false;
//     }
//   }
//   return true;
// }

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
