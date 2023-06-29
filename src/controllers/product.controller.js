const { productModel } = require("../models");
const fs = require('fs')
const PUBLIC_URL = process.env.PUBLIC_URL;

//Métodos[GET]
const getProductByID = async ({ params }, res) => {
    const { id } = params;
    const data = await productModel.findById({_id: id});
    res.send({data});
};
const getProductByCategory = async ({ params }, res) => {
    const { category } = params;
    const data = await productModel.find({category: category});
    res.send({data});
};
const getProducts = async (req, res) => {
    const data = await productModel.find({});
    res.send({data})
};

//Métodos[POST]
const createProduct = async (req, res) => {
    const { body, file } = req
    const newObject = {
        title: body.title,
        imageName: file.filename, 
        image: `${PUBLIC_URL}/${file.filename}`, 
        category: body.category,
        price: body.price
    }
    const data = await productModel.create(newObject);
    res.send({data})
};

//Métodos[PUT]
const updateProduct = async (req, res) => {
    const { id } = req.params
    const { title, price } = req.body
    const data = await productModel.findByIdAndUpdate(id, {$set: {title, price}}, {new: true});
    res.send({data})
};

//Métodos[DELETE]
const deleteProduct = async ({ params }, res) => {
    const { id } = params

    const productSelect = await productModel.findById({ _id:id });
    const filename = productSelect.image;
    try {
        fs.unlinkSync(`src/storage/${filename}`)
        console.log(`Se removio el archivo: [${filename}] de [storage]`)
      } catch(err) {
        console.error('Ocurrio algo al intentar remover el archivo', err)
      }


    const data = await productModel.findByIdAndRemove(id);
    res.send({data})
};

module.exports = {
    getProductByID,
    getProductByCategory,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};