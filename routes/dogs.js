const queries = require('../db/queries');
const express = require('express');
const router = express();

router.get('/dog', (req, res)=>{
  queries.getAllDog().then((result)=>{
    res.json(result);
  })
})

router.get('/dog/:breed', (req, res)=>{
  queries.getOneDog(req.params.breed).then((result)=>{
    res.json(result);
  })
})

router.post('/dog', (req, res) => {
  queries.createDog({
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    breed_id: req.body["breed_id"]
  })
  .then((result) => {
    res.json(result);
  })
});
