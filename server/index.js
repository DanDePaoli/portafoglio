
const express = require('express');
const path = require('path');
const mongoICmodel = require('../db/ICmodel.js');
const calDB = require('../db/calDBindex.js');
const bodyParser = require('body-parser');
const PORT = 3002;

const app = express();

app.use(express.static(path.join(__dirname, 'build')));



// app.use(express.static(path.join(__dirname,"../public")));

app.use(bodyParser.json());
//old express path using rooms and id
// app.use('/rooms/:room_id', express.static(path.join(__dirname, '../public')));

//unfinished do not use staticGzip
// app.use('/rooms/:room_id', expressStaticGzip(path.join(__dirname, '../public')));

//ImageCarousel endpoint


app.get('/suggestedPlaces', (req, res) => {
  console.log('get req working!');
  mongoICmodel.getPlaces((error, listings) => {
    if (error) {
      console.log('server down');
      res.status(400).send(error);
    } else {
      console.log('GET received!');
      res.status(200).send(listings);
    }
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log('Failed Server Connection');
  } else {
    console.log(`Server listening on PORT: ${PORT}`);
  }
});


//calendar enpoints

app.get('/rooms/:room_id/reservation', (req, res) => {
  // declare query string
  let queryString = 'SELECT rooms.nightly_fee, rooms.rating, rooms.reviews, rooms.minimum_stay, rooms.maximum_guest, reservations.id, reservations.booked_date FROM rooms, reservations WHERE rooms.id = ? AND rooms.id = reservations.room_id ORDER BY reservations.booked_date;';
  // declare query params
  let queryParams = [req.params.room_id];
  // get all the informations and reservations of a specify room with the room_id from the endpoint
  calDB.query(queryString, queryParams, function(error, results, fields){
    if (error) {
      console.log("Failed to get data from databases: ", error);
      res.status(404).send(error);
    } else {
      console.log("Succeed to get data from databases");
      res.status(200).send(results);
    }
  });
});

// POST request to '/rooms/:room_id/reservation' route
app.post('/rooms/:room_id/reservation', (req, res) => {
  // get the check_in date from request
  let check_in = moment(req.body.check_in);
  // get the check_out date from request
  let check_out = moment(req.body.check_out);
  // create a list of dates in YYYY-MM-DD format that started from the check_in date to the check_out date
  let dates = [];
  for (let i = check_in; i <= check_out; check_in.add(1, 'days')) {
    dates.push(check_in.format('YYYY-MM-DD'));
  }
  // iterate over the dates array
  for (let i = 0; i < dates.length; i++) {
    // declare query string
    let queryString = 'INSERT INTO reservations (room_id, booked_date) VALUES (?, ?)';
    // declare query params
    let queryParams = [req.params.room_id, dates[i]];
    // insert current date into reservations table where room_id is equal to the room_id from the endpoint
    calDB.query(queryString, queryParams, (error, results, fields) => {
      if (error) {
        console.log(`Failed to insert data to reservations table where room id = ${req.params.room_id}: `, error);
        res.status(404).send(error);
      } else {
        console.log(`Success to insert data to reservations table where room id = ${req.params.room_id}`);
        res.status(200).send();
      }
    });
  }
});