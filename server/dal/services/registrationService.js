var User = require('../persistance/user/user');
var bcrypt = require('bcrypt');

module.exports = {
    usernameExists: function (username, callback) {
        User.count({'username': username}, function(err, count){
            callback(err, count > 0);
        });

    },
    emailExists: function (email, callback) {
        User.count({'email': email}, function(err, count){
            callback(err, count > 0);
        });
    },
    registerUser: function(user, callback){
        bcrypt.genSalt(function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password = hash;
                new User(user).save(callback);
            });
        });


    }
};