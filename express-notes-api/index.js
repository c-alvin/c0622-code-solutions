const express = require('express');

const app = express();

const data = require('./data.json');

const fs = require('fs');

app.use(express.json());

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
  } else if (notes[number] === undefined) {
    res.status(404).send({
      error: 'no note with the specified id'
    });
  } else if (notes[number] !== undefined) {
    res.status(200).send(notes[number]);
  }
});

app.post('/api/notes', (req, res) => {
  const postObject = req.body.content;
  const notes = data.notes;
  if (!postObject) {
    res.status(400).send({
      error: 'content is a required field'
    });
  } else if (postObject) {
    const test = req.body;
    test.Id = data.nextId;
    notes[data.nextId] = test;
    data.nextId++;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newData, err => {
      if (!err) {
        res.status(201).send(test);
      } else {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occurred' });
      }
    });
  }
}
);

app.delete('/api/notes/:id', (req, res) => {
  const number = Number(req.params.id);
  const notes = data.notes;
  if (number <= 0 || !Number.isInteger(number) || isNaN(number)) {
    res.status(400).json({
      error: 'id must be a postiive integer'
    });

  } else if (notes[number] === undefined) {
    res.status(404).json({
      error: 'no note with the specified id'
    });
  } else if (notes[number] !== undefined) {
    delete notes[number];
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newData, err => {
      if (!err) {
        res.sendStatus(204);
      } else {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occurred' });
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
  } else if (!postObject) {
    res.status(400).send({
      error: 'content is a required field'
    });
  } else if (notes[number] === undefined) {
    res.status(404).send({
      error: 'no note with the specified id'
    });
  } else if (notes[number] !== undefined && postObject) {
    notes[number].content = postObject;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newData, err => {
      if (!err) {
        res.status(200).send(notes[number]);
      } else {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occurred' });
      }
    });
  }
});
