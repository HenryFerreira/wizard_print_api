/*Imports*/
const mongoose = require("mongoose");
const uuid = require("uuid");

/*Modelo del Producto*/
const OrderSchema = new mongoose.Schema(
    {
        _id      : { type : uuid.v4().toString() },
        title    : { type : String },
        image    : { type : Strign },
        amount   : { type : Number },
        price    : { type : Number },
        subTotal : { type : Number }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
/*Exportar el modelo para la DB*/
module.exports = mongoose.model("order", OrderSchema);