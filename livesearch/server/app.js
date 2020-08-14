/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/

// express framework loading. I will take advantage of its router system to create a REST API. This will be scalable in the future.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

// creating express instance
const app = express();

// setting up express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Enabling CORS 
app.use(cors());

// loading routes settings
const routes = require("./routes/routes.js")(app);


const port      = 3035;
const hostname  = 'https://localhost';

/** 
 * Start the Node Server Here...
 * 
*/

const server = app.listen(port, () => {
    console.log(`[Server running at ${hostname}:${server.address().port}]`);
});
