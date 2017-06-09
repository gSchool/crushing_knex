const queries = require('../db/queries');
const express = require('express');
const router = express();

router.get('/breed', (req, res)=>{
  queries.getAllBreed().then((result)=>{
    res.json(result);
  })
})

router.get('/breed/:type', (req, res)=>{
  queries.getOneBreed(req.params.type).then((result)=>{
    res.json(result);
  })
})

router.post('/breed', (req, res) => {
  queries.createBreed({
    "breed-type": req.body.type;
  })
  .then((result) => {
    res.json(result);
  })
});
