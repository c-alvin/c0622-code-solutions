const fs = require('fs');
const dataTest = require('./data.json');

function create() {
  const notes = dataTest.notes;
  notes[dataTest.nextId] = process.argv[3];
  dataTest.nextId++;
  const newData = JSON.stringify(dataTest, null, 2);
  fs.writeFile('./data.json', newData, err => {
    if (err) throw err;
  });
}

module.exports = create;
