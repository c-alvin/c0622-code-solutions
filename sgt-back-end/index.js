const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      if (!grades) {
        res.status(404).json({
          error: 'Cannot find grades'
        });
      } else {
        res.json(grades);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.post('/api/grades', (req, res) => {
  const bodyObject = req.body;
  const name = bodyObject.name;
  const course = bodyObject.course;
  const score = bodyObject.score;

  if (!name || !course || score === undefined || !Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: 'must enter valid name, course, and score'
    });
    return;
  }

  const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
  `;

  const params = [name, course, score];

  db.query(sql, params)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    }
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const bodyObject = req.body;
  const name = bodyObject.name;
  const course = bodyObject.course;
  const score = bodyObject.score;
  if (!name || !course || score === undefined || !Number.isInteger(score) || score < 0 || score > 100 || gradeId <= 0) {
    res.status(400).json({
      error: 'must enter valid name, course, score, and gradeId'
    });
    return;
  }
  const sql = `
      update "grades"
      set "name" = $2,
          "course" = $3,
          "score" = $4
      where "gradeId" = $1
      returning *;
  `;

  const params = [gradeId, name, course, score];

  db.query(sql, params)
    .then(result => {
      const newGrade = result.rows[0];
      if (!newGrade) {
        res.status(404).json({
          error: 'Cannot find grade'
        });
      } else {
        res.status(200).json(newGrade);
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (gradeId <= 0 || gradeId === undefined || isNaN(gradeId) || !Number.isInteger(gradeId)) {
    res.status(400).json({
      error: 'must enter valid id'
    });
    return;
  }

  const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *;
  `;

  const params = [gradeId];

  db.query(sql, params).then(result => {
    const newGrade = result.rows[0];
    if (!newGrade) {
      res.status(404).json({
        error: 'Cannot find grade'
      });
    } else {
      res.status(204);
    }
  }).catch(err => {
    console.error(err);
    res.status(500).json({
      error: 'An unexpected error occurred.'
    });
  });
});
