const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    total_price: Number,
    shipping_address: String,
    phone1: Number,
    phone2: Number,
    country: String,
    isPaid: Boolean,
    pin: Number,

})

exports.Order = mongoose.model('Order', orderSchema);