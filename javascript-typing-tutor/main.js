var $AllSpan = document.querySelectorAll('span');
var counter = 0;

function trackKey(event) {
  if (event.key === $AllSpan[counter].textContent) {
    $AllSpan[counter].className = 'greentext';
    $AllSpan[counter + 1].className = 'text-underline';
    counter++;
  } else if (event.key !== $AllSpan[counter].textContent) {
    $AllSpan[counter].className = 'redtext text-underline';
  }
}
document.addEventListener('keydown', trackKey);

// goal: when user has finished typing the phrase, return accuracy
// if $AllSpan[count] === $AllSpan.length - 1, it has reached the last
// item in the nodelist. accuracy would be inputs correct / total inputs.
// create a total keydown counter, create a keydown counter for correct
// and incorect keydowns.  correct inputs / correct + incorrect inputs
// = accuracy. add that variable as text content with a string.
