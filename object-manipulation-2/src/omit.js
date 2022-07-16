/* exported omit */
// goal: return a new object containing all the proprties of source
// not listed in keys
// create an empty object
// copy the given object into the new object, to not cause reference issues.
// create a for in loop with a nested for loop
//  if the resulet[key] === source[keys[i]], then remove that from the new object.
// return result.

function omit(source, keys) {
  var result = {};
  for (var k in source) {
    result[k] = source[k];
  }
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (result[key] === source[keys[i]]) {
        delete result[key];
      }
    }
  }
  return result;
}

// side notes:
// var test = Object.assign({}, source);
// test.alvin = 3;
// console.log('alvin' in test);
