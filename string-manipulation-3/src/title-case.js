/* exported titleCase */
// goal: The original title, but with APA Title Case Style applied.
// make an if statement to check exceptions
// check exceptions for API and javascript with and without colons
// check if word includes hypens then split and add to empty string
// check for words > length 3 and words that are the first word
// check for words <= 3
// return emptystring

function titleCase(title) {
  var lowerCaseTitle = title.toLowerCase();
  var splitArray = lowerCaseTitle.split(' ');
  var emptyString = '';

  for (var i = 0; i < splitArray.length; i++) {
    var word = splitArray[i];

    if ((word === 'at' || word === 'and' || word === 'or' || word === 'nor' ||
      word === 'but' || word === 'a' || word === 'an' || word === 'the' ||
      word === 'as' || word === 'at' || word === 'by' || word === 'for' ||
      word === 'in' || word === 'of' || word === 'on' || word === 'per' ||
      word === 'to') && (i !== 0) && (!splitArray[i - 1].includes(':'))) {
      emptyString += word;
      emptyString += ' ';
    } else if (word === 'api') {
      word = 'API';
      emptyString += word;
      emptyString += ' ';
    } else if (word === 'javascript:') {
      word = 'JavaScript:';
      emptyString += word;
      emptyString += ' ';
    } else if (word === 'javascript') {
      word = 'JavaScript';
      emptyString += word;
      emptyString += ' ';
    } else if (word.includes('-')) {
      var splitWord = word.split('-');
      var sWord1 = splitWord[0];
      var sWord2 = splitWord[1];
      emptyString += sWord1[0].toUpperCase() + sWord1.slice(1, sWord1.length) + '-' + sWord2[0].toUpperCase() + sWord2.slice(1, sWord2.length);
      emptyString += ' ';
    } else if (word.length > 3 || word === splitArray[0]) {
      word = word[0].toUpperCase() + word.slice(1, word.length);
      emptyString += word;
      emptyString += ' ';
    } else if (word.length <= 3) {
      word = word[0].toUpperCase() + word.slice(1, word.length);
      emptyString += word;
      emptyString += ' ';
    }
  }
  return emptyString.trim();
}
