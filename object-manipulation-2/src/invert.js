/* exported invert */
// return the array with the key value pair inversed.
// create an emppty object
// create a for in loop
// assign the varaible for the objects property
// to the new object[source[key]]

function invert(source) {
  var resultObject = {};
  for (var key in source) {
    resultObject[source[key]] = key;
  }
  return resultObject;
}
