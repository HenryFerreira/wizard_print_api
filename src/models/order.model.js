/*Imports*/
const mongoose = require("mongoose");

/*Modelo del Producto*/
const OrderSchema = new mongoose.Schema(
    {
        title: {
            type : String,
        },
        imageName: {
            type : String,
        },
        image: {
            type : String,
        },
        amount: {
            type : Number,
        },
        price: {
            type : Number,
        },
        subTotal: {
            type : Number,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
/*Exportar el modelo para la DB*/
module.exports = mongoose.model("order", OrderSchema);