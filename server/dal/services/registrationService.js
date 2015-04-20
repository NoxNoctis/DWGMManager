var User = require('../persistance/user/user');
var bcrypt = require('bcrypt');
var Promise = require("bluebird");

function resolveCount(count) {
    this.resolve(count > 0);
}

module.exports = {
    usernameExists: function (username) {
        return new Promise(function (resolve) {
            User.count({'username': username})
                .then(resolveCount.bind({resolve:resolve}));
        });
    },
    emailExists: function (email) {
        return new Promise(function(resolve){
            User.count({'email': email})
                .then(resolveCount.bind({resolve:resolve}))
        });
    },
    registerUser: function (user, callback) {
        bcrypt.genSalt(function (err, salt) {
            bcrypt.hash(user.password, salt, function (err, hash) {
                user.password = hash;
                new User(user).save(callback);
            });
        });
    }
};