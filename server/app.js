var express = require('express');
    middlewares = require('./middlewares');
    http = require('http');
    chatServer = require('./chat/chatServer');
    format = require('util').format;
    log = require('util').log;

    require('./dal/db/connection');

var app = express();
var server = http.Server(app);

middlewares.configure(app);


app.set('port', process.env.PORT ||3000);

server.listen(app.get('port'), function () {

    log(format('Server listening at port: %s', app.get('port')));

});

chatServer.start(server);

module.exports = app;