const fs = require('fs');
const dataTest = require('./data.json');

function update() {
  const notes = dataTest.notes;
  notes[process.argv[3]] = process.argv[4];
  const newData = JSON.stringify(dataTest, null, 2);
  fs.writeFile('./data.json', newData, err => {
    if (err) throw err;
  });

}

module.exports = update;
