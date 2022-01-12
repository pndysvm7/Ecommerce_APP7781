const { Category } = require('../models/category');
const express = require('express');


const router = express.Router();






router.post('/', (req, res) => {
    const newItem = new Category({
        name: req.body.name,
        quantity: req.body.quantity,
        total_price: req.body.total_price,
        shipping_address: req.body.shipping_address,
        phone1: req.body.phone1,
        phone2: req.body.phone2,
        country: req.body.country,
        isPaid: req.body.isPaid,
        pin: req.body.pin,

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

    const item = await Category.find();
    const hero = "hero";
    res.send(item);
})

module.exports = router;


