const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/dog', (req, res) => {
  queries.dog
  .getAll()
  .then( (result) => {
    res.json(result);
  })
})

router.get('/dog/:name', (req, res) => {
  queries.dog
  .getOne(req.params.name)
  .then((result) => {
    res.json(result);
  })
})

router.post('/dog', (req, res) => {
  queries.dog
  .create(req.body)
  .then((results) => {
    res.json(results[0]);
  })
});

module.exports = router;
