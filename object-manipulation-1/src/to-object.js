/* exported toObject */
// goal: return an object with one property consisting of the key
// value pair
// create for loop to iterate through array
// set item at array index of 0 to property key in an object
// set item array index of 1 to value of proprety key

function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
