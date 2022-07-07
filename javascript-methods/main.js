var firstNumber = 8;
var secondNumber = 13;
var thirdNumber = 22;

var maximumValue = Math.max(firstNumber, secondNumber, thirdNumber);
console.log('The value of maximumValue:', maximumValue);

var heroes = ['Batman', 'Ironman', 'Spiderman', 'Thor'];

var randomNumber = Math.random();
randomNumber = randomNumber * (heroes.length - 1);

var randomIndex = Math.floor(randomNumber);
console.log('The value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('The value of randomHero:', randomHero);

var library = [
  {
    title: 'Dune',
    author: 'Frank Herbert'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R Tolkien'
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    author: 'J.R.R Tolkien'
  }
];

var lastBook = library.pop();
console.log('The value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('The value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('The value of library:', library);

var fullName = 'Alvin Cho';

var firstAndLastName = fullName.split(' ');
console.log('The value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('The value of sayMyName:', sayMyName);
