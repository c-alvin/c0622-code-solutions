/* exported zip */
// goal:An Array of Arrays. Each sub-Array is a pair containing
// an element from first, and an element from second, each from the
// same index of their respective source Array. The "zipped" result is
// only as long as the shorter of first and second.

function zip(first, second) {
  var arrayofArrays = [];
  var arrayChunk = [];
  var length = 0;
  if (first.length < second.length) {
    length = first.length;
  } else {
    length = second.length;
  }

  for (var i = 0; i < length; i++) {
    arrayChunk.push(first[i]);
    arrayChunk.push(second[i]);
    arrayofArrays.push(arrayChunk);
    arrayChunk = [];
  }
  return arrayofArrays;
}
