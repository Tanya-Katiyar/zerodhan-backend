const {Schema} = require("mongoose");

const HoldingSchema = new Schema({  //telling mongoose what kind of data we have 
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = {HoldingSchema};