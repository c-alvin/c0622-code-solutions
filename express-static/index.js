const express = require('express');
const path = require('path');

const app = express();

const absolute = path.join('__dirname', ('public'));
console.log(absolute);
const serve = express.static('public');

app.use(serve);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
