// var clientID;
// console.log("client id in passport", clientID);

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users"); // one argument mean to fetch out two arguments mean to put data

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          // .save is for saving it to mongodb server
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });

      // console.log("access token", accessToken);
      // console.log("refresh token ", refreshToken);
      // console.log("profile ", profile);
    }
  )
);
