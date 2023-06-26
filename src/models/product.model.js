const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title    : { type : String },
        image    : { type : Strign },
        category : { type : "BUZOS" | "PINES" | "TAZAS" },
        price    : { type : Number}
    },
    {
        timeseries: true,
        versionKey: false
    }
)

module.exports = mongoose.model("products", ProductSchema);