var mongoose = require('mongoose'),
    findOrCreate = require('mongoose-findorcreate'),
    AbstractUserSchema = require('../AbstractUserSchema');

var facebookUserSchema = new AbstractUserSchema({
    facebook_id: String
});

facebookUserSchema.plugin(findOrCreate);

module.exports = facebookUserSchema;