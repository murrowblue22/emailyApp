const mongoose = require('mongoose');
const {Schema, model} = mongoose; 

const userSchema = new Schema({
    googleId: String
})

const User = new model('users', userSchema);