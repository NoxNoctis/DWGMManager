var User = require('../user'),
    facebookUserSchema = require('./facebookUserSchema');

module.exports = User.discriminator('facebookUser', facebookUserSchema);