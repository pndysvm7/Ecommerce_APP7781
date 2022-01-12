const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const morgan = require('morgan');
require('dotenv').config();


app.use(bodyParser.json());
app.use(morgan('tiny'));

const productRouter = require('./routers/products');
const orderRouter = require('./routers/orders');



const api = process.env.API_URL;

app.use(`${api}/products`, productRouter);
app.use(`${api}/orders`, orderRouter);



mongoose.connect(process.env.URIDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbname: 'eshop-database'

}).then(() => { console.log("database connection is ready") })
    .catch((err) => { console.log("database connection error", err) });








app.listen(port, () => {

    console.log(`server running on port ${port}`);
})