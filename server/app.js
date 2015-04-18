var express = require('express');
var http = require('http');
var mainRouter = require('./routers/mainRouter');
var chatServer = require('./chat/chatServer');
var format = require('util').format;
var log = require('util').log;
    require('./dal/db/connection');

var app = express();
var server = http.Server(app);

app.set('port', process.env.PORT ||3000);

app.configure(function(){
    app.use(mainRouter);
});

server.listen(app.get('port'), function () {

    log(format('Server listening at port: %s', app.get('port')));

});

chatServer.start(server);

module.exports = app;