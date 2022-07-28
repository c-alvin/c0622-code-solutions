/* exported flatten */
// goal: A new Array with any direct child Arrays unwrapped. This function should only "flatten" array by one level.
// loop through array and check if value is an array
// if array, make a variable for the words in the smaller array
// push those values into the new array
// else push the other values into the array as normal
// return new array

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      var arrayTest = array[i];
      for (var k = 0; k < arrayTest.length; k++) {
        var word = arrayTest[k];
        newArray.push(word);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
