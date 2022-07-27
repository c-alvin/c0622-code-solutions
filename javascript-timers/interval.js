var $h1 = document.querySelector('h1');

function countdown(event) {
  if ($h1.textContent > 1) {
    $h1.textContent--;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
}

setInterval(countdown, 1000);
