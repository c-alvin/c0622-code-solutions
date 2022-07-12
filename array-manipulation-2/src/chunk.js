/* exported chunk */
// goal: return a new array of arrays, each sub-array has a length equal
// to size.  remaining elements are gathered into a final sub-array
//

function chunk(array, size) {
  var counter = 0;

  var chunkOfChunks = [];
  var chunk = [];

  for (let i = 0; i < array.length; i++) {
    if (counter < size) {
      chunk.push(array[i]);
      counter++;
    }

    if (counter >= size || i === array.length - 1) {
      chunkOfChunks.push(chunk);
      chunk = [];
      counter = 0;
    }
  }
  return chunkOfChunks;
}
