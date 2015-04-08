var express = require('express');
var mainRouter = require('./routers/mainRouter');
var format = require('util').format;
var log = require('util').log;

var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT ||3000);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

app.use(mainRouter);

app.listen(app.get('port'), function () {

    log(format('Server listening at port: %s', app.get('port')));

});

module.exports = app;