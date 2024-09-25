const {model} = require("mongoose");

const {HoldingSchema} = require('../schemas/HoldingSchema');

const HoldingsModel = new model("holding", HoldingSchema);  //this model will be used by mongodb to create the collection named 'holdings'

module.exports = {HoldingsModel};
