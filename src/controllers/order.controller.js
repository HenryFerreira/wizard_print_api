const { orderModel } = require("../models");
const fs = require('fs')
const PUBLIC_URL = process.env.PUBLIC_URL;

//Métodos[GET]
const getOrderByID = async ({ params }, res) => {
    const { id } = params;
    const data = await orderModel.findById({_id: id});
    res.send({data});
};

const getOrders = async (req, res) => {
    const data = await orderModel.find({});
    res.send({data})
};

//Métodos[POST]
const createOrder = async (req, res) => {
    const { body, file } = req
    const newObject = {
        title: body.title,
        imageName: file.filename, 
        image: `${PUBLIC_URL}/${file.filename}`, 
        amount: body.category,
        price: body.price,
        subTotal: body.subTotal
    }
    const data = await orderModel.create(newObject);
    res.send({data})
};

const createOrderByRaw = async (req, res) => {
    const { body } = req
    const data = await orderModel.create(body);
    res.send({data})
};

//Métodos[PUT]
const updateOrder = async (req, res) => {
    const { id } = req.params
    const { title, price } = req.body
    const data = await orderModel.findByIdAndUpdate(id, {$set: {title, price}}, {new: true});
    res.send({data})
};

//Métodos[DELETE]
const deleteOrder = async ({ params }, res) => {
    const { id } = params

    const productSelect = await orderModel.findById({ _id:id });
    const filename = productSelect.image;
    try {
        fs.unlinkSync(`src/storage/${filename}`)
        console.log(`Se removio el archivo: [${filename}] de [storage]`)
      } catch(err) {
        console.error('Ocurrio algo al intentar remover el archivo', err)
      }


    const data = await orderModel.findByIdAndRemove(id);
    res.send({data})
};

module.exports = {
    getOrderByID,
    getOrders,
    createOrder,
    createOrderByRaw,
    updateOrder,
    deleteOrder
};