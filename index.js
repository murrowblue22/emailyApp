const express           = require('express'),
      bodyParser        = require('body-parser'),
      app               = express(); 
  
const config            = require('./config/config.js'),
      {mongoose}        = require('./db/mongoose'),
      User              = require('./models/User'),
      cookieSession     = require('cookie-session'),
      passport          = require('passport'),
      passportConfig    = require('./services/passport'),
      authRoutes        = require('./routes/authRoutes'),
      billingRoutes     = require('./routes/billingRoutes');

const PORT = (process.env.PORT === "8080") ? "5000" : process.env.PORT; 
//const PORT = process.env.PORT;


//app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());
app.use(cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000, 
      keys: [process.env.COOKIE_SECRET]
}));

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

app.listen(PORT, process.env.IP, function() {
    console.log(`emailyApp Started on port ${PORT} !!!!`);
})