/* exported oddOrEven */
// goal: return a new array containing strings
// indicating whether the number at i was even or odd
// assign empty array to new array varible.
// iterate through each item in the array using for loop
// check if each item in the array is either even or odd, number % 2 = 0 is even, number % 2 = 1 is odd
// if even return "even", if odd return "odd", push strings into new array
// return array

function oddOrEven(numbers) {
  var array = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      array.push('even');
    } else if ((numbers[i] % 2) === 1) {
      array.push('odd');
    }
  }
  return array;
}
