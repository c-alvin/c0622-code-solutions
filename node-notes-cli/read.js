const dataTest = require('./data.json');

function read() {
  if (process.argv[2] === 'read') {
    const notes = dataTest.notes;
    for (const prop in notes) {
      console.log(`${prop}: ${notes[prop]}`);
    }
  }
}
module.exports = read;
