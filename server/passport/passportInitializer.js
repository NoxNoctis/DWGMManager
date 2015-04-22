var passport = require('passport'),
    localStrategy = require('./localStrategy'),
    facebookStrategy = require('./facebookStrategy'),
    User = require('./../dal/persistance/user/user');

function defineLoginLogic(){
    localStrategy.defineLoginLogic();
    facebookStrategy.defineLoginLogic();
}

function defineSerializationLogic(){
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
}

function defineDeserializationLogic(){
    passport.deserializeUser(function(id, done) {
        User.findById(id, '_id username email   ', function(err, user) {
            done(err, user);
        });
    });
}

module.exports = {
    initialize : function(){
        defineLoginLogic();
        defineSerializationLogic();
        defineDeserializationLogic();
    }
};