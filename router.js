const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'finalexam61122677'
});

const app = express();
app.get('/FinalExam', function (req, res) {
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM FinalExam', function (error, results, fields) {
     
      if (error) throw error;
      res.send(results)
    });
  });
});

app.listen(3001, () => {
 console.log('Go to http://172.18.132.107/FinalExam so you can see the data.');
});