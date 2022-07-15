/* exported invert */

function invert(source) {
  var resultObject = {};
  for (var key in source) {
    resultObject[source[key]] = key;
  }
  return resultObject;
}
