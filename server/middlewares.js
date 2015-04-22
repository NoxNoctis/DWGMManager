var cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport'),
    mainRouter = require('./routers/mainRouter'),
    passportInitializer = require('./passport/passportInitializer');

module.exports = {configure: function(app){
    app.use(cookieParser());
    app.use(bodyParser());
    app.use(session({ secret: 'IloveRedHeads', resave: false, saveUninitialized: false}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(mainRouter);

    passportInitializer.initialize();
}};