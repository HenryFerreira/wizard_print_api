/*Imports*/
const { Schema, model } = require("mongoose");

/*Modelo del Producto*/
const OrderSchema = new Schema(
    {
        _id      : { type : Schema.Types.UUID },
        title    : { type : String },
        image    : { type : String },
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
module.exports = model("order", OrderSchema);