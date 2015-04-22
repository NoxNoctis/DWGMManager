var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('./../dal/persistance/user/user'),
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

module.exports = {defineLoginLogic : defineLoginLogic};