var $h1 = document.querySelector('h1');

function changeTime() {
  $h1.textContent = 'Hello There';
}

$h1.addEventListener(setTimeout(changeTime, 1000));
