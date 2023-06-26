/*Imports*/
const mongoose = require("mongoose");
const uuid = require("uuid");

/*Modelo del Producto*/
const ProductSchema = new mongoose.Schema(
    {
        _id      : { type : uuid.v4().toString() },
        title    : { type : String },
        image    : { type : Strign },
        category : { type : "BUZOS" | "PINES" | "TAZAS" },
        price    : { type : Number}
    },
    {
        timestamps: true,
        versionKey: false
    }
)
/*Exportar el modelo para la DB*/
module.exports = mongoose.model("products", ProductSchema);