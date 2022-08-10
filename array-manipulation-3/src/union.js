/* exported union */
// goal: A new Array containing unique values from both first and second in the order they appear.
// create a hash
// anytime the value is new, \push that value into the empty array
// return empty array
function union(first, second) {
  var emptyArray = [];
  var unionHash = {};

  for (var i = 0; i < first.length; i++) {
    var key = first[i];
    if (unionHash[key] !== undefined) {
      unionHash[key] += 1;
    } else {
      unionHash[key] = 1;
      emptyArray.push(key);
    }
  }
  for (var k = 0; k < second.length; k++) {
    var key2 = second[k];
    if (unionHash[key2] !== undefined) {
      unionHash[key2] += 1;
    } else {
      unionHash[key2] = 1;
      emptyArray.push(key2);
    }
  }
  return emptyArray;
}
