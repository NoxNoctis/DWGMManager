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
    passport.authenticate('local', function (error, user) {
        if (user) {
            req.login(user, function () {
            });
            res.send({status: 'success', user: {id: user._id, username: user.username}});
        }
        res.send({status: 'failure'});
    })(req, res);
});

router.post('/logout', function (req, res) {
    if (req.user) {
        req.logout();
        res.redirect('/');
    }
});

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

router.get('/users/current', function (req, res) {
    res.send(req.user || {});
});

module.exports = router;