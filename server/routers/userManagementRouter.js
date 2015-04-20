var router = require('express').Router();
var registrationService = require('../dal/services/registrationService');

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

module.exports = router;