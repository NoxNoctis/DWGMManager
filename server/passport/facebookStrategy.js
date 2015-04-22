var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    User = require('../dal/persistance/user/facebookUser/facebookUser');

function defineLoginLogic() {
    passport.use(new FacebookStrategy({
            clientID: 854090267995598,
            clientSecret: '81e622d45089b43d89d9caa7486628f7',
            callbackURL: "http://local.dwgm.herokuapp.com:3000/auth/facebook/callback"
        },
        function (accessToken, refreshToken, profile, done) {
            User.findOrCreate({facebook_id: profile.id}, {username: profile.displayName}, function (err, user) {
                if (err) {
                    return done(err);
                }
                done(null, user);
            });
        }
    ));
}

module.exports = {defineLoginLogic: defineLoginLogic};

