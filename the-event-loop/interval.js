let count = 3;
const intervalId = setInterval(decrement, 1000);

function decrement() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast Off!');
    clearInterval(intervalId);
  }
}
