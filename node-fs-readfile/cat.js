const fs = require('fs');
let index = 2;

function concatFiles() {
  if (index < process.argv.length) {
    fs.readFile('./' + process.argv[index], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
      index++;
      concatFiles();
    });
  }
}

concatFiles();
