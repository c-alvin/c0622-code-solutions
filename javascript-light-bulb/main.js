var lightOn = false;

var $Button = document.querySelector('.button1');
var $Background = document.querySelector('.background-black');

function clickButton(event) {
  if (lightOn === false) {
    lightOn = true;
    $Button.className = 'button2';
    $Background.className = 'background-yellow';
  } else if (lightOn === true) {
    lightOn = false;
    $Button.className = 'button1';
    $Background.className = 'background-black';
  }
}

$Button.addEventListener('click', clickButton);
