/* exported isAnagram */
// goal: A Boolean indicating whether or not secondString is an anagram of firstString.
// replace spaces, split into new array and sort data
// create empty strings
// check lengths if not equal then not an anagram
// create a double for loop to check at each index and if they are equal
// break the inner loop to not have duplicactes.
// add new values to string and if they equal each other
// the values are an anagram

// function isAnagram(firstString, secondString) {
//   var newString = firstString.replace(' ', '');
//   var newString2 = secondString.replaceAll(' ', '');
//   var newArray = newString.split('');
//   var newArray2 = newString2.split('');
//   newArray = newArray.sort();
//   newArray2 = newArray2.sort();
//   var testString = '';
//   var testString2 = '';

//   if (newArray.length !== newArray2.length) {
//     return false;
//   }

//   for (var i = 0; i < newArray.length; i++) {
//     for (var k = 0; k < newArray2.length; k++) {
//       if (newArray[i] === newArray2[k]) {
//         testString += newArray[i];
//         testString2 += newArray2[i];
//         break;
//       }
//     }
//   }
//   if (testString === testString2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// more efficient solution*

function isAnagram(firstString, secondString) {
  var anagramHash = {};
  var firstStringNoSpaces = firstString.replaceAll(' ', '');
  var secondStringNoSpaces = secondString.replaceAll(' ', '');

  if (firstStringNoSpaces.length !== secondStringNoSpaces.length) {
    return false;
  }

  for (var i = 0; i < firstStringNoSpaces.length; i++) {
    var letter = firstStringNoSpaces[i];
    // if key value pair already exists, increment value by 1
    if (anagramHash[letter] !== undefined) {
      anagramHash[letter] += 1;
    } else { // if key value pair does not exist yet, create value pair and set value to 1.
      anagramHash[letter] = 1;
    }
  }
  for (var j = 0; j < secondStringNoSpaces.length; j++) {
    var secondStringLetter = secondStringNoSpaces[j];
    // if it exists decrease count by 1
    if (anagramHash[secondStringLetter] !== undefined) {
      anagramHash[secondStringLetter] -= 1;
    } else { // if key value pair does not exist yet, create a value pair with value of 1.
      anagramHash[secondStringLetter] = 1;
    }
  }
  for (var property in anagramHash) {
    if (anagramHash[property] !== 0) {
      return false;
    }
  }
  return true;
}
