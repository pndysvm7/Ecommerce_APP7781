const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phone: Number,
    country: String,
    isAdmin: Boolean,
    pin: Number,
})

exports.User = mongoose.model('User', userSchema);