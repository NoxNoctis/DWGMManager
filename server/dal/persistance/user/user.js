var mongoose = require('mongoose'),
    userSchema = require('./userSchema');

module.exports = mongoose.model('User', userSchema);