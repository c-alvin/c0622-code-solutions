
const fs = require('fs');
const dataTest = require('./data.json');

function deleteTest() {
  const notes = dataTest.notes;
  delete notes[process.argv[3]];
  const newData = JSON.stringify(dataTest, null, 2);
  fs.writeFile('./data.json', newData, err => {
    if (err) throw err;
  });
}

module.exports = deleteTest;
