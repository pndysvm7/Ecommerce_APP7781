const { Order } = require('../models/order');
const express = require('express');


const router = express.Router();


// async function ssr(url) {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();
//     await page.goto(url, { waitUntil: 'networkidle0' });
//     const html = await page.content();


//     await browser.close();
//     console.log(html);
//     return html;
// }




router.post('/', (req, res) => {
    const newItem = new Order({
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
    // const item = await ssr("https://www.confirmtkt.com/rbooking-d/trains/from/Prayagraj%20Junction%20PRYJ/to/MUMBAI%20LOKMANYA%20TILAK%20TERMINUS%20LTT/12-01-2022");


    const item = await Order.find();
    res.send(item);
})

module.exports = router;


