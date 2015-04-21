var router = require('express').Router();
var registrationService = require('../dal/services/registrationService');
var passport = require('passport');

router.post('/register', function (req, res) {
    var user = req.body;

    registrationService.usernameExists(user.username)
        .then(function (userExists) {
            if (!userExists) {
                registrationService.emailExists(user.email)
                    .then(function (emailExists) {
                        if (!emailExists) {
                            registrationService.registerUser(user, function (err) {
                                if (!err) {
                                    res.send({status: 'success'});
                                }
                            })
                        }
                        else {
                            res.send({status: 'failure', field: 'email'})
                        }
                    });
            }
            else {
                res.send({status: 'failure', field: 'username'})
            }
        });
});

router.post('/login', function (req, res) {
    passport.authenticate('local', function(error, user){
        if(!error){
            req.login(user, function(){});
            res.send({status: 'authenticated', user: {id: user._id, username: user.username}});
        }
    })(req, res);
});

router.get('/users/current', function(req, res){
    res.send(req.user || {});
});

module.exports = router;