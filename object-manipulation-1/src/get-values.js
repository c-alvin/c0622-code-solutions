/* exported getValues */
// goal
// return an array with object property values
// create an empty array literal
// create for in loop to iterate through object at variable key
// push the values at key into the array with array.push(object[key])
// return array

function getValues(object) {
  var array = [];
  for (var key in object) {
    array.push(object[key]);
  }
  return array;
}
