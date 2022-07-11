/* exported ransomCase */
// goal:returns string with every-other character uppercased
// for loop iteratres through the string
// if statement, to check if i was odd or even.  if even lowercase
// if odd uppercase
// return ransom;
function ransomCase(string) {
  var ransom = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom += string[i].toLowerCase();
    } else {
      ransom += string[i].toUpperCase();
    }
  }
  return ransom;
}
