var ModalOn = false;

var $ChangeContent = document.querySelector('.display-none');
var $ClickButton = document.querySelector('.button1');
var $ClickButton2 = document.querySelector('.button2');

function changeDisplay(event) {
  if (ModalOn === false) {
    $ChangeContent.className = 'display-content';
    ModalOn = true;
  } else if (ModalOn === true) {
    $ChangeContent.className = 'display-none';
    ModalOn = false;
  }

}

$ClickButton.addEventListener('click', changeDisplay);
$ClickButton2.addEventListener('click', changeDisplay);
