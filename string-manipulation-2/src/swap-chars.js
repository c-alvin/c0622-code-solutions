/* exported swapChars */
// goal: swap the characters at firstindex and second index
// create an array by splitting string
// create an empty string to concatenate values into
// set the array[firstIndex] to array[secondIndex]
// set the array[secondIndex] to string[firstIndex]
// create a for loop to iterate through the array length and concatenate
// each value into the empty string swapString
function swapChars(firstIndex, secondIndex, string) {
  var swapString = '';
  var swap = string.split('');
  swap[firstIndex] = string[secondIndex];
  swap[secondIndex] = string[firstIndex];
  for (var i = 0; i < swap.length; i++) {
    swapString += swap[i];
  }
  return swapString;
}
