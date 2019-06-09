const mongoose = require('mongoose'); 

//mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGODB_URI);


module.exports = {
    mongoose
};