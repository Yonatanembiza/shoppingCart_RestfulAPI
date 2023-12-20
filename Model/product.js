let Products = []
class Product {
    constructor(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }
    saveProduct() {
        Products.push(this);
        return this;
    }
    update(id) {
        const productIndex = Products.findIndex(p => p.id === id);
        if (productIndex) {
            Products.splice(index, 1, this);
        } else {
            return new Error('Product Not Found');
        }
    }
    static fetchAll() {
        return Products;
    }
    static getProductById(id) {
        const productIndex = Products.findIndex(p => p.id === id);
        if (productIndex) {
            return Products[productIndex];
        } else {
            return new Error('No product with that ID');
        }
    }
    static deleteProductById(id) {
        const productIndex = Products.findIndex(p => p.id === id);
        if (productIndex) {
            return Products.splice(productIndex, 1);
        } else {
            return new Error('No product with that ID')
        }
    }
}
module.exports = Product;