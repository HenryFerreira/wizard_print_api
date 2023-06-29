/*Imports*/
const express = require("express");
const { getProducts, getProductByID, getProductByCategory, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const uploadMiddleware = require("../utils/handleStorage");
const router = express.Router();



router.get("/", getProducts)
router.get("/:id", getProductByID)
router.get("/category/:category", getProductByCategory)
router.post("/", uploadMiddleware.single("myfile"), createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)


/*Exportar la Ruta del Modelo*/
module.exports = router;