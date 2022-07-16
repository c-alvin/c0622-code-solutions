/* exported pick */
// goal return a new object containing all proprties of source
// listed in keys. If a key is not defined in source,
// then that property is not added to the object.
// create an empty object
// create a for loop to iterate through keys
// create a varaible for keys being iterated through
// if source[key] is !== undefined, then you know to add that to the empty object
// return object

function pick(source, keys) {
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (source[key] !== undefined) {
      object[key] = source[key];
    }
  }
  return object;
}
