var express = require('express');
var mainRouter = require('./routers/mainRouter');

var app = express();

app.set('port', 3000);

app.use(mainRouter);

app.listen(3000, function () {

    console.log('Example app listening at >KPBGJ');

});

module.exports = app;