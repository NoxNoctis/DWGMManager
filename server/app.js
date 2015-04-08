var express = require('express');
var mainRouter = require('./routers/mainRouter');

var app = express();

app.set('port', 3000);

app.use(mainRouter);

app.listen(app.get('port'), function () {

    console.log('Example app listening at >KPBGJ');

});

module.exports = app;