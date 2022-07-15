/* exported omit */
// goal: return a new object containing all the proprties of source
// not listed in keys
// create an empty object
// loop through array
// set variable of array to = array[i]
// if (source[variable] != undefined)
// source[variable] = object[variable];

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

// var test = Object.assign({}, source);
// test.alvin = 3;
// console.log('alvin' in test);
