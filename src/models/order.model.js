const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        title    : { type : String },
        image    : { type : Strign },
        amount   : { type : Number },
        price    : { type : Number },
        subTotal : { type : Number },
    },
    {
        timeseries: true,
        versionKey: false
    }
)

module.exports = mongoose.model("order", OrderSchema);