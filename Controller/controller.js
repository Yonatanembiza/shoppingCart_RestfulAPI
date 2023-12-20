const Product = require('../Model/product');

exports.getProducts = (req, res, next)=>{
    res.status(200).json(Product.fetchAllProducts());
}
exports.getProductById = (req, res, next)=>{
    res.sttaus(200).json(Product.getProductById(req.params.prodID))
}
exports.saveProduct = (req, res, next)=>{
    const prod = req.body;
    const savedProduct = Product(prod.id, prod.title, prod.price, prod.description).saveProduct();
    res.status(200).json(savedProduct);
}
exports.updateProduct = (req, res, next)=>{
    const prod = req.body;
    const updatedProduct = Product(prod.id, prod.title, prod.price, prod.description).updateProduct();
    res.status(200).json(updatedProduct);
}
exports.deleteProductById = (req, res, next)=>{
    res.status(200).json(Product.deleteProductById(req.params.prodID))
}
