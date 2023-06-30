/*Imports*/
const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const { getOrders, getOrderByID, createOrder, updateOrder, deleteOrder } = require("../controllers/order.controller");
const router = express.Router();



router.get("/", getOrders)
router.get("/:id", getOrderByID)
router.post("/", createOrder)
router.put("/:id", updateOrder)
router.delete("/:id", deleteOrder)


/*Exportar la Ruta del Modelo*/
module.exports = router;