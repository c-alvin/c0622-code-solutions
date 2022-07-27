var arrayOfImg = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $circle = document.querySelectorAll('.circle');
var $img = document.querySelector('img');
var $chevronLeft = document.querySelector('.left');
var $chevronRight = document.querySelector('.right');
var counter = 0;

function changepicture() {
  counter++;
  if (counter < 5) {
    $circle[counter].setAttribute('class', 'fa-solid fa-circle circle');
    $circle[counter - 1].setAttribute('class', 'fa-regular fa-circle circle');
    $img.setAttribute('src', arrayOfImg[counter]);
  } else {
    counter = 0;
    $circle[counter].setAttribute('class', 'fa-solid fa-circle circle');
    $circle[arrayOfImg.length - 1].setAttribute('class', 'fa-regular fa-circle circle');
    $img.setAttribute('src', arrayOfImg[counter]);
  }
  clearInterval(intervalId);
  intervalId = setInterval(changepicture, 3000);

}

function changepictureLeft() {
  counter--;
  if (counter >= 0) {
    $circle[counter].setAttribute('class', 'fa-solid fa-circle circle');
    $circle[counter + 1].setAttribute('class', 'fa-regular fa-circle circle');
    $img.setAttribute('src', arrayOfImg[counter]);
  } else {
    counter = 4;
    $circle[counter].setAttribute('class', 'fa-solid fa-circle circle');
    $circle[0].setAttribute('class', 'fa-regular fa-circle circle');
    $img.setAttribute('src', arrayOfImg[counter]);
  }
  clearInterval(intervalId);
  intervalId = setInterval(changepicture, 3000);

}

function changepictureCircle(counter) {
  $circle[counter].setAttribute('class', 'fa-solid fa-circle circle');
  $img.setAttribute('src', arrayOfImg[counter]);
  clearInterval(intervalId);
  intervalId = setInterval(changepicture, 3000);

}

var intervalId = setInterval(changepicture, 3000);

function clickChevronLeft(direction) {
  changepictureLeft();
}

$chevronLeft.addEventListener('click', clickChevronLeft);

function clickChevronRight(direction) {
  changepicture();
}

$chevronRight.addEventListener('click', clickChevronRight);

function clickCircle(event) {
  if (event.target.tagName === 'I') {
    $circle[counter].setAttribute('class', 'fa-regular fa-circle circle');
    counter = event.target.getAttribute('id');
    changepictureCircle(counter);
  }
}

var $circleDiv = document.querySelector('.circle-row');
$circleDiv.addEventListener('click', clickCircle);
