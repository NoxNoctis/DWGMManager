var express = require('express');
var mainRouter = require('./routers/mainRouter');
var format = require('util').format;
var log = require('util').log;

var app = express();

app.set('port', 3000);

app.use(mainRouter);

app.listen(app.get('port'), function () {

    log(format('Server listening at port: %s', app.get('port')));

});

module.exports = app;