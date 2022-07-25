/* exported isAnagram */
// goal: A Boolean indicating whether or not secondString is an anagram of firstString.
// iter

function isAnagram(firstString, secondString) {
  var newString = firstString.replace(' ', '');
  var newString2 = secondString.replaceAll(' ', '');
  var newArray = newString.split('');
  var newArray2 = newString2.split('');
  newArray = newArray.sort();
  newArray2 = newArray2.sort();
  var testString = '';
  var testString2 = '';

  if (newArray.length !== newArray2.length) {
    return false;
  }

  for (var i = 0; i < newArray.length; i++) {
    for (var k = 0; k < newArray2.length; k++) {
      if (newArray[i] === newArray2[k]) {
        testString += newArray[i];
        testString2 += newArray2[i];
        break;
      }
    }
  }
  if (testString === testString2) {
    return true;
  } else {
    return false;
  }
}
