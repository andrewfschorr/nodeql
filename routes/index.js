var express = require('express');
var router = express.Router();
var mysql = require('mysql');

require('dotenv').config()

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM widgets', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'hello world'
  });
});

module.exports = router;

// CREATE TABLE widgets (
//   ID int NOT NULL AUTO_INCREMENT,
//   foo varchar(255) NOT NULL,
//   bar varchar(255),
//   age int,
//   complete BOOL DEFAULT 0,
//   PRIMARY KEY (ID)
// );

// INSERT INTO `widgets` (`foo`, `bar`, `age`)
// VALUES ('schorr', null, '99');