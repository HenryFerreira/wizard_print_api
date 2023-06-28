const { productModel } = require("../models");

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
            image: file.filename, 
            category: body.category,
            price: body.price
    }

    const data = await productModel.create(newObject);
    res.send({data})
};

//Métodos[PUT]
const updateProduct = async (req, res) => {
    const { body, id } = req
    const data = await productModel.findByIdAndUpdate(id, body, {new: true});
    res.send({data})
};

//Métodos[DELETE]
const deleteProduct = async (req, res) => {

};

module.exports = {
    getProductByID,
    getProductByCategory,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};