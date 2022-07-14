/* exported pick */
// goal return a new object containing all proprties of source
// listed in keys. If a key is not defined in source,
// then that property is not added to the object.
// iterate through object by key, check if key is equal to ANY of
// the keys, if so empty object.keyvariable ===

function pick(source, keys) {
  var object = {};
  for (var x in source) {
    for (var i = 0; i < keys.length; i++) {
      if (x === keys[i]) {
        object.x = x;
      }
    }
  }
}
