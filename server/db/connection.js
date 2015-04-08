var mongo = require('mongodb').MongoClient;

var conn;

mongo.connect("mongodb://localhost:27017/DWGM", function(err, db) {
    if(!err) {
        console.log("We are connected to DB");
        conn = db;
    }
    else{
        console.log(err.message);
    }
});

module.exports = {get : function(){return conn;}};