const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name: String,
    image: String,
    brand: String,
    quantity: Number,
    price: Number,
})

exports.Product = mongoose.model('Product', productSchema);