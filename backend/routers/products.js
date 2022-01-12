const { Product } = require('../models/product');
const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    const newItem = new Product({
        name: req.body.name,
        image: req.body.image,
        brand: req.body.brand,
        quantity: req.body.quantity,
        price: req.body.price,
    })

    newItem.save().then((createdProduct) => {
        res.status(201).json(createdProduct);
    })
        .catch(err => {
            res.send({
                err,
                success: false,

            })
        })
})



router.get('/', async (req, res) => {
    const item = await Product.find();
    res.send(item);
})

module.exports = router;


