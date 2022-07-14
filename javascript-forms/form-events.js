function handleFocus(event) {
  console.log('the focus event was fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('The blur event was fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('the value of:', event.target.name);
  console.log(event.target.value);
}

var $inputOne = document.querySelector('input');
console.log($inputOne);
var $inputTwo = document.querySelector('input:nth-of-type(2)');
console.log($inputTwo);

var $textArea = document.querySelector('textarea');
console.log($textArea);

$inputOne.addEventListener('focus', handleFocus);
$inputOne.addEventListener('blur', handleBlur);
$inputOne.addEventListener('input', handleInput);

$inputTwo.addEventListener('blur', handleBlur);
$inputTwo.addEventListener('focus', handleFocus);
$inputTwo.addEventListener('input', handleInput);

$textArea.addEventListener('input', handleInput);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('focus', handleFocus);
