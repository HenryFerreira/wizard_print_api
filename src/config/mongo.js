/*Imports*/
const mongoose = require("mongoose");

/* Función de conección a la DB */
const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI)
        .then(() => {
            console.log("**** CONEXIÓN ABIERTA ****");
        })
        .catch(err => {
            console.log(err);
        })
}

/*Exportar la función para utilizarlo en el app.js */
module.exports = dbConnect