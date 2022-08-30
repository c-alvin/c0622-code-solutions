const takeAChance = require('./take-a-chance');

const promiseTest = takeAChance('alvin');

promiseTest.then(value => {
  console.log(value);
}).catch(error => {
  console.error(error.message);
});
