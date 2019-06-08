const mongoose = require('mongoose');
const {Schema, model} = mongoose; 

const userSchema = new Schema({
    googleId: String, 
    credits: { type: Number, default: 0 }
});

const User = new model('users', userSchema);