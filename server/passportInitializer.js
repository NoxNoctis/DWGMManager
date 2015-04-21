var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('./dal/persistance/user/user'),
    Promise = require("bluebird"),
    bcrypt = Promise.promisifyAll(require('bcrypt'));

function defineLoginLogic(){
    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({ username: username})
                .then(function(user) {

                    if (!user) {
                        return done(null, false);
                    }

                    bcrypt.compareAsync(password, user.password)
                        .then(function(result){
                            return done(null, result ? user : result);
                        });
                })
                .catch(function(err){
                    return done(err)
                });
        }));
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