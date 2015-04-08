var mongo = require('mongodb').MongoClient;
var log = require('util').log;

var conn;

mongo.connect("mongodb://localhost:27017/DWGM", function(err, db) {
    if(!err) {
        log("We are connected to DB");
        conn = db;
    }
    else{
        log(err.message);
    }
});

module.exports = {get : function(){return conn;}};