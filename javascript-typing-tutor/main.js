
// function trackKey(event) {
//   for (var i = 0; i < $AllSpan.length; i++) {
//     if (event.key === $AllSpan[i].textContent) {
//       $AllSpan[i].className = 'greentext text-underline';
//     } else if (event.key !== $AllSpan[i].textContent) {
//       $AllSpan[i].className = 'redtext';
//     }
//   }
// }
var $AllSpan = document.querySelectorAll('span');
var counter = 0;

function trackKey(event) {
  if ($AllSpan[counter].textContent === event.key) {
    $AllSpan[counter].className = 'greentext';
    $AllSpan[counter + 1].className = 'text-underline';
    counter++;
  } else if ($AllSpan[counter] !== event.key) {
    $AllSpan[counter].className = 'redtext text-underline';
  }
}
document.addEventListener('keydown', trackKey);
