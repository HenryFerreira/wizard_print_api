/*Imports*/
const mongoose = require("mongoose");

/*Modelo del Producto*/
const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, },
        imageName: { type: String, },
        image: { type: String, },
        category: { type: String, },
        price: { type: Number, }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
/*Exportar el modelo para la DB*/
module.exports = mongoose.model("products", ProductSchema);