const {Schema} = require("mongoose");


const HoldingsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    qty:{
        type: Number,
        required: true,
    },
    avg:{
        type: Number,
    },
    price: {
        type: Number,
    },
    net:{
        type: String,
    },
    day:{
        type: String,
    }
})

module.exports = {HoldingsSchema: HoldingsSchema};