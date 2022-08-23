const express = require('express');

const app = express();

const data = require('./data.json');

const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const arrayObjects = [];
  const notes = data.notes;
  for (const key in notes) {
    arrayObjects.push(notes[key]);
  }
  res.send(arrayObjects);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes/:id', (req, res) => {
  const notes = data.notes;
  const number = Number(req.params.id);
  if (number <= 0 || !Number.isInteger(number) || isNaN(number)) {
    res.status(400).send({
      error: 'id must be a postiive integer'
    });
    return;
  }
  if (notes[number] === undefined) {
    res.status(404).json({
      error: 'no note with the specified id'
    });
    return;
  }
  if (notes[number] !== undefined) {
    res.status(200).json(notes[number]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const postObject = req.body.content;
  const notes = data.notes;
  if (!postObject) {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }
  if (postObject) {
    const test = req.body;
    test.Id = data.nextId;
    notes[data.nextId] = test;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newData, err => {
      JSON.error = 'An unexpected error occurred.';
      if (!err) {
        res.status(201).send(test);
      } else {
        res.status(500).send((JSON.error));
      }
    });
    data.nextId++;
  }
}
);

app.delete('/api/notes/:id', (req, res) => {
  const number = Number(req.params.id);
  const notes = data.notes;
  if (number <= 0 || !Number.isInteger(number) || isNaN(number)) {
    res.status(400).send({
      error: 'id must be a postiive integer'
    });
    return;
  }
  if (notes[number] === undefined) {
    res.status(404).json({
      error: 'no note with the specified id'
    });
    return;
  }
  if (notes[number] !== undefined) {
    delete notes[number];
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('derp/data.json', newData, err => {
      JSON.error = 'An unexpected error occurred.';
      if (!err) {
        res.sendStatus(204);
      } else {
        res.status(500).send((JSON.error));
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const number = Number(req.params.id);
  const notes = data.notes;
  const postObject = req.body.content;
  if (number <= 0 || !Number.isInteger(number) || isNaN(number)) {
    res.status(400).send({
      error: 'id must be a postiive integer'
    });
    return;
  }
  if (!postObject) {
    res.status(400).send({
      error: 'content is a required field'
    });
    return;
  }
  if (notes[number] === undefined) {
    res.status(404).json({
      error: 'no note with the specified id'
    });
    return;
  }
  if (notes[number] !== undefined && postObject) {
    notes[number].content = postObject;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newData, err => {
      JSON.error = 'An unexpected error occurred.';
      if (!err) {
        res.status(200).send(notes[number]);
      } else {
        res.status(500).send((JSON.error));
      }
    });
  }
});
