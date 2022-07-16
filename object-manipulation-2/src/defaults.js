/* exported defaults */
// Assigns properties of source object to the target object for all properties
// that are not defined on target.
// create a for in loop to create a variable and iterate through the keys
// check to see if target at the key property is equal to undefined
// if so target[key] = source key

function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
