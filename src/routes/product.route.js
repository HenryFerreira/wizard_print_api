/*Imports*/
const express = require("express");
const router = express.Router();

router.get("/product", (req, res) => {
    
    const data = ["hola", "mundo"]
    
    res.send({data})
})


/*Exportar la Ruta del Modelo*/
module.exports = router;