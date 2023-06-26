/* Imports */
require("dotenv").config()
const express = require("express");
const cors = require("cors");

/* Constantes */
const app = express();
const PORT = process.env.PORT || 3000;

/* Uso de la APP */
app.use(cors());//Para que la APP no tenga problema de CORS
app.listen(PORT, () => {
    console.log(`API iniciada en el puerto:[${PORT}]`);
})
