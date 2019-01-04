var express = require('express');
var app = express();
var path = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.set('json spaces', 4);

var con = mysql.createConnection({
  host: 'sql10.freemysqlhosting.net',
  user: 'sql10272676',
  password: 'BXs5Z16uXg',
  port: '3306',
  database: "sql10272676"
});

app.get('/', function (req, res) {
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM test", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

app.get('/hello', function (req, res) {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO test VALUES(DEFAULT,'2','2','2')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
    res.sendFile(path.join(__dirname+'/hello.html'));
    //res.sendfile(__dirname + '/hello.html');
  });

app.listen(4000, function () {
  console.log('Example app listening on port 3000!');
});
