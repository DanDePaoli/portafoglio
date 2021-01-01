var mysql = require('mysql');

var runlocal = 'localhost';
var runAWS = '54.213.63.161';
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'calendarrebuild'
// });

var connection = mysql.createConnection({
  host: `${runlocal}`,
  user: 'root',
  database: 'calendarrebuild'
});

connection.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to DB')
  }
});

module.exports = connection;