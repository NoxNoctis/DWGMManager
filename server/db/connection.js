var mongo = require('mongodb').MongoClient;
var log = require('util').log;

var conn;

mongo.connect("mongodb://dwgmadmin:qwerqwer@ds045679.mongolab.com:45679/dwgm", function(err, db) {
    if(!err) {
        log("We are connected to DB");
        conn = db;
    }
    else{
        log(err.message);
    }
});

module.exports = {get : function(){return conn;}};