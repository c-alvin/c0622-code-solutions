/* exported flatten */
// goal: A new Array with any direct child Arrays unwrapped. This function should only "flatten" array by one level.

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
