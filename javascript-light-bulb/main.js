var clicks = false;

var $Button = document.querySelector('.button1');
var $Background = document.querySelector('.background-black');

function clickButton(event) {
  if (clicks === false) {
    clicks = true;
    $Button.className = 'button2';
    $Background.className = 'background-yellow';
  } else if (clicks === true) {
    clicks = false;
    $Button.className = 'button1';
    $Background.className = 'background-black';
  }
}

$Button.addEventListener('click', clickButton);
