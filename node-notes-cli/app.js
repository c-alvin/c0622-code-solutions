
const create = require('./create.js');

const read = require('./read.js');

const update = require('./update.js');

const deleteTest = require('./delete.js');

if (process.argv[2] === 'create') {
  create();
}
if (process.argv[2] === 'read') {
  read();
}
if (process.argv[2] === 'update') {
  update();
}
if (process.argv[2] === 'delete') {
  deleteTest();
}
// if (process.argv[2] === 'read') {
//   const notes = dataTest.notes;
//   for (const prop in notes) {
//     console.log(`${prop}: ${notes[prop]}`);
//   }
// }

// if (process.argv[2] === 'create') {
//   const notes = dataTest.notes;
//   notes[dataTest.nextId] = process.argv[3];
//   dataTest.nextId++;
//   const newData = JSON.stringify(dataTest, null, 2);
//   fs.writeFile('./data.json', newData, err => {
//     if (err) throw err;
//   });
// }

// if (process.argv[2] === 'delete') {
//   const notes = dataTest.notes;
//   delete notes[process.argv[3]];
//   const newData = JSON.stringify(dataTest, null, 2);
//   fs.writeFile('./data.json', newData, err => {
//     if (err) throw err;
//   });
// }

// if (process.argv[2] === 'update') {
//   const notes = dataTest.notes;
//   notes[process.argv[3]] = process.argv[4];
//   const newData = JSON.stringify(dataTest, null, 2);
//   fs.writeFile('./data.json', newData, err => {
//     if (err) throw err;
//   });
// }
