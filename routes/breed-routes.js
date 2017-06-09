const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/breed', (req, res)=>{
  queries.breed
  .getAll()
  .then( (result) => {
    res.json(result);
  })
})

router.get('/breed/:id', (req, res)=>{
  queries.breed
  .getOne(req.params.id)
  .then((result) => {
    res.json(result);
  })
})

router.post('/breed', (req, res) => {
  queries.breed
  .create(req.body)
  .then((results) => {
    res.json(results[0]);
  })
});

module.exports = router;
