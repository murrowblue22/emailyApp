const express           = require('express'),
      bodyParser        = require('body-parser'),
      app               = express(); 
  
const config            = require('./config/config.js'),
      {mongoose}        = require('./db/mongoose'),
      User              = require('./models/User'),
      cookieSession     = require('cookie-session'),
      passport          = require('passport'),
      passportConfig    = require('./services/passport'),
      authRoutes        = require('./routes/authRoutes');


app.use(bodyParser.urlencoded({extended: true})); 
app.use(cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000, 
      keys: [process.env.COOKIE_SECRET]
}));

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("emailyApp Started !!!!");
})