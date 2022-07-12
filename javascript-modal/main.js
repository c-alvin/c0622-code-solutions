var clicks = true;

var $ChangeContent = document.querySelector('.display-content');
var $ClickButton = document.querySelector('.button1');
var $ClickButton2 = document.querySelector('.button2');

function changeDisplay(event) {
  if (clicks === true) {
    $ChangeContent.className = 'display-none';
    clicks = false;
  } else if (clicks === false) {
    $ChangeContent.className = 'display-content';
    clicks = true;
  }

}

$ClickButton.addEventListener('click', changeDisplay);
$ClickButton2.addEventListener('click', changeDisplay);
