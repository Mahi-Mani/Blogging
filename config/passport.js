const passport = require("passport");
const User = require("../models/user.js");
const LocalStrategy = require("passport-local").Strategy;

// module.exports = function (passport) {
    passport.use(
        new LocalStrategy(
            {
                usernameField: "email",
                passwordField: "password"
                // passReqToCallback: true
            },
            function (email, password, done) {
                console.log("Inside passport");
                User.findOne({ email: email },
                    function (err, user) {
                        if (err) {
                            console.log("err");
                            return done(err);
                        }
                        if (!user) {
                            console.log("user not found");
                            return done(null, false);
                        }
                        //   if (!user.checkPassword(password)) {
                        //     console.log("password not match");
                        //     return done(null, false);
                        //   }
                        console.log("inside local strategy user check : ", user);
                        return done(null, user);
                    });
            }
        ));

    passport.serializeUser(function (user, done) {
        console.log("serialize user: " + user);
        done(null, {
            id: user._id
        });
    });

    passport.deserializeUser(function (user, done) {
        console.log("deserialize user " + user);
        done(null, {
            id: user._id
        });
    });
// }

module.exports = passport;