var mongoose = require('mongoose');
var log = require('util').log;

var conn;

mongoose.connect("mongodb://dwgmadmin:qwerqwer@ds045679.mongolab.com:45679/dwgm", function(err) {
    if(!err) {
        log("We are connected to DB");
    }
    else{
        log(err.message);
    }
});

module.exports = {get : function(){return mongoose.connection;}};