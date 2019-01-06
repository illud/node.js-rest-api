var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

app.use(bodyparser.json({type: "*/*"}));
app.set('json spaces', 4);

url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log("connected to database");
    db.close();
});


app.get('/', function (req, res){
    res.send("hello world");
});

app.get('/get', function (err, res){
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db('misclientes');
        dbo.collection("clientes").find({}).toArray(function(err, result){
            if(err) throw err;
            res.send(result);
            db.close();
        });
    })
});

app.post('/post', function(req, res){
    var datas = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName
    }
    MongoClient.connect(url, function(err, db){
        if (err) throw err;
        var dbo = db.db('misclientes');
        dbo.collection("clientes").insertOne(datas, function(err, result){
            if (err) throw err;
            console.log("datas inserted");
            db.close;
        });
    });
});

app.listen(process.env.PORT || 5000, function (){
    console.log("Connected!");
});
