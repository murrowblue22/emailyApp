const passport          = require('passport'),
      GoogleStrategy    = require('passport-google-oauth20').Strategy,
      mongoose          = require('mongoose');


const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findOne({_id: id})
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLECLIENTID,
    clientSecret: process.env.GOOGLECLIENTSECRET,
    callbackURL: '/auth/google/callback'
}, 
(accessToken, refreshToken, profile, done) => {
   User.findOne({ googleId: profile.id })
   .then((existingUser) => {
       if(existingUser) {
           done(null, existingUser);
       }
       else {
           new User({ googleId: profile.id })
           .save()
           .then(user => done(null, user));
       }
   });
})); 