/* exported getKeys */
// return an array of object's property keys
// create an empty array literal
// create a for in loop to iterate through object at variable
// push variable into array

function getKeys(object) {
  var array = [];
  for (var key in object) {
    array.push(key);
  }
  return array;
}
