/* Constantes */
require("dotenv").config()
const express = require("express");
const cors = require("cors");
const dbConnect = require("./src/config/mongo");
const app = express();


/* Uso de la APP */
app.use(cors({origin: "*"}));//Para que la APP no tenga problema de CORS
app.use(express.json());//Para que pueda utilizar JSON la APP
app.use(express.static("src/storage"))

const PORT = process.env.PORT || 3000;

app.use("/api/wizardprint", require("./src/routes"))
app.listen(PORT, () => {
    console.log(`API iniciada en el puerto:[${PORT}]`);
})

dbConnect();