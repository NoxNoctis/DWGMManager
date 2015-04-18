var User = require('../persistance/user/user');

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
        new User(user).save(callback);
    }
};