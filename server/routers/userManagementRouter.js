var router = require('express').Router();
var registrationService = require('../dal/services/registrationService');

router.post('/register', function(req){
    var user = req.body;

    registrationService.usernameExists(user.username, function(err, userExists){
        if(!userExists){
            registrationService.emailExists(user.email, function(err, emailExists){
                if(!emailExists){
                    registrationService.registerUser(user, function(err){
                        if(!err){
                            console.log('yay');
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;