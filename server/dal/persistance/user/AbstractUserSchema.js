var mongoose = require('mongoose'),
    util = require('util'),
    Schema = mongoose.Schema;

function AbstractUserSchema() {
    Schema.apply(this, arguments);

    this.add({
        username: String,
        password: String,
        email: String,
        type: {type: String, enum: ['local', 'facebook', 'google']}
    });
}

util.inherits(AbstractUserSchema, Schema);

module.exports = AbstractUserSchema;