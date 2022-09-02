const express = require('express');
const path = require('path');

const app = express();

const absolute = path.join(__dirname, ('public'));

const serve = express.static(absolute);

app.use(serve);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
