/* exported chunk */
// goal: return a new array of arrays, each sub-array has a length equal
// to size.  remaining elements are gathered into a final sub-array
// create a counter variable and set to 0
// create an empty array and another empty array that we will use to push arrays
// into arrays create a for loop to iterate through whole array length as we
// will need all items in the array.  if the counter < size we will keep
// pushing those values into the array of arrays. if the counter > size
// push the array into the array, and reset both the counter and pushed array to
// 0 and empty.
// account for fringe case that the item is the last element in the array, still
// push that smaller array into the larger array.
// return array of arrays;

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
