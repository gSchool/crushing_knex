const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/breed', (req, res)=>{
  queries.breed
  .getAll()
  .then( results => {
    res.json(results);
  })
})

router.get('/breed/:id', (req, res)=>{
  queries.breed
  .getOne(req.params.id)
  .then(result => {
    res.json(result);
  })
})

router.post('/breed', (req, res) => {
  queries.breed
  .create(req.body)
  .then(result => {
    res.json(result[0]);
  })
});

module.exports = router;
