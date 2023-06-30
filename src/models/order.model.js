/*Imports*/
const mongoose = require("mongoose");

/*Modelo del Producto*/
const OrderSchema = new mongoose.Schema(
    {
        nameClient: { type: String, },
        products: [
            {
                productName: {type: String},
                price: {type: Number},
                amount: { type: Number, },
            }
        ],
        totalPirce: { type: Number, },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
/*Exportar el modelo para la DB*/
module.exports = mongoose.model("order", OrderSchema);