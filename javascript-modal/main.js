var ModalOn = false;

var $changeContent = document.querySelector('.display-none');
var $clickButton = document.querySelector('.button1');
var $clickButton2 = document.querySelector('.button2');

function changeDisplay(event) {
  if (ModalOn === false) {
    $changeContent.className = 'display-content';
    ModalOn = true;
  } else if (ModalOn === true) {
    $changeContent.className = 'display-none';
    ModalOn = false;
  }

}

$clickButton.addEventListener('click', changeDisplay);
$clickButton2.addEventListener('click', changeDisplay);
