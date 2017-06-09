const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

const breed = require('./routes/breed-routes');
const dog = require('./routes/dogs-routes');

app.use(breed);
app.use(dog);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})
