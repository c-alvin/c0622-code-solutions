const add = require('./add');

const subtract = require('./subtract');

const multiply = require('./multiply');

const divide = require('./divide');

if (process.argv[3] === 'plus') {
  console.log(add(Number(process.argv[2]), Number(process.argv[4])));
}
if (process.argv[3] === 'minus') {
  console.log(subtract(Number(process.argv[2]), Number(process.argv[4])));
}
if (process.argv[3] === 'times') {
  console.log(multiply(Number(process.argv[2]), Number(process.argv[4])));
}
if (process.argv[3] === 'over') {
  console.log(divide(Number(process.argv[2]), Number(process.argv[4])));
}