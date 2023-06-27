/*Imports*/
const { Schema, model } = require("mongoose");

/*Modelo del Producto*/
const ProductSchema = new Schema(
    {
        _id      : { type : Schema.Types.UUID },
        title    : { type : String },
        image    : { type : String },
        category : { type : "BUZOS" | "PINES" | "TAZAS" },
        price    : { type : Number}
    },
    {
        timestamps: true,
        versionKey: false
    }
)
/*Exportar el modelo para la DB*/
module.exports = model("products", ProductSchema);