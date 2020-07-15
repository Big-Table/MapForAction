const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("User");

//user is what is pulled out of Mongo database
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      const existingUser = await User.findOne({ googleID: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }
        // console.log(profile);
      const user = await new User({ googleID: profile.id, profilePicture: profile.photos[0].value, firstName: profile.name.givenName, lastName: profile.name.familyName, email: profile.emails[0].value }).save();
      done(null, user);
    }
  )
);
