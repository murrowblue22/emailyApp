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

if (process.env.NODE_ENV === 'production') {
      // Express will serve up production assets 
      // like our main.js file, or main.css file! (lecture 9 )
      app.use(express.static('emailyclient/build'));
      
      // Express will serve up the index.html file 
      // if it doesn't recognize the route 
      const path = require('path'); 
      app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'emailyclient', 'build', 'index.html'));
      })
  
}

app.listen(PORT, process.env.IP, function() {
    console.log(`emailyApp Started on port ${PORT} !!!!`);
})