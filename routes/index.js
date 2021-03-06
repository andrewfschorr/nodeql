const express = require('express');
const router = express.Router();
const db = require('../db');
const _ = require('lodash');

router.get('/', function(req, res, next) {
  db.query('SELECT * FROM widgets', function (error, results, fields) {
    if (error) throw error;
    res.render('index', {
      title: 'hello world',
      data: {
        widgets: results,
      }
    });
  });
});

router.post('/add', function(req, res, next) {
  db.query('INSERT INTO `widgets` (`foo`, `bar`, `age`) VALUES (?, ?, ?)',
  [req.body.foo, req.body.bar, req.body.age],
  function(err, reulst, fields) {
    if (!err) {
      res.redirect('/')
    } else {
      throw err;
    }
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