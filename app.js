var express = require('express');
var app = express();
var path = require("path");

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello', function (req, res) {
    res.sendFile(path.join(__dirname+'/hello.html'));
    //res.sendfile(__dirname + '/hello.html');
  });

app.listen(4000, function () {
  console.log('Example app listening on port 3000!');
});