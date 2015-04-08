var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var mongo = require('mongodb').MongoClient;

var app = express();

mongo.connect("mongodb://localhost:27017/DWGM", function(err, db) {
    if(!err) {
        console.log("We are connected");
        app.set('db', db);
    }
});

app.use(bodyParser.json());

app.set('port', 3000);
app.set('views', __dirname + '/public/');


app.get('/', function(req, res){
        res.sendfile(app.get('views') + '/index.html');
});

app.get('/*', function(req, res){
        res.sendfile(app.get('views') + req.url);
});

app.put('/save', function(req){
    console.log(req.body);
    var collection = app.get('db').collection('testscheme');
    collection.insert(req.body);
});

app.listen(3000, function () {

    console.log('Example app listening at >KPBGJ');

});

module.exports = app;