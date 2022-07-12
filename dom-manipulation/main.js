var clicks = 0;

var $HotButton = document.querySelector('.hot-button');
var $ClickCount = document.querySelector('.click-count');

function clickButton(event) {
  clicks += 1;
  $ClickCount.textContent = 'Clicks: ' + clicks;
  if (clicks < 4) {
    $HotButton.className = 'hot-button cold';
  } else if (clicks < 7) {
    $HotButton.className = 'hot-button cool';
  } else if (clicks < 10) {
    $HotButton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $HotButton.className = 'hot-button warm';
  } else if (clicks < 16) {
    $HotButton.className = 'hot-button hot';
  } else {
    $HotButton.className = 'hot-button nuclear';
  }
}

$HotButton.addEventListener('click', clickButton);
