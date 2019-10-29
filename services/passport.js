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
console.log("keys.googleClientID in passport.js->", keys.googleClientID);
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }
      // .save is for saving it to mongodb server
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

// (accessToken, refreshToken, profile, done) => {
//   User.findOne({ googleId: profile.id }).then(existingUser => {
//     if (existingUser) {
//       done(null, existingUser);
//     } else {
//       // .save is for saving it to mongodb server
//       new User({ googleId: profile.id })
//         .save()
//         .then(user => done(null, user));
//     }
//   });

// }
