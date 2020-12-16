// const model = require('../src/components/ImageCarousel/db/model.js');
const model = require('./dbmodel.js');

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/suggestedPlaces', (req, res) => {
  console.log('get req working!');
  model.getPlaces((error, listings) => {
    if (error) {
      console.log('server down');
      res.status(400).send(error);
    } else {
      console.log('GET received!');
      res.status(200).send(listings);
    }
  });
});

app.listen(process.env.PORT || 8080);