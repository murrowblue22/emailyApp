const express           = require('express'), 
      passport          = require('passport'),
      bodyParser        = require('body-parser'),
      GoogleStrategy    = require('passport-google-oauth20').Strategy, 
      app               = express(); 
  
  
const keys = require('./config/keys');     
        
app.use(bodyParser.urlencoded({extended: true})); 


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken); 
    console.log('profile:', profile); 
})); 
        
        
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.get('/auth/google/callback', passport.authenticate('google'));


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("emailyApp Started !!!!");
})