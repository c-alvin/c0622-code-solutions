const express = require('express');

let nextId = 1;
const grades = {};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const postObject = req.body;
  postObject.id = nextId;
  grades[nextId] = postObject;
  nextId++;
  res.status(201).send(postObject);
});
