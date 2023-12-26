let Products = []
class Product {
    constructor(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }
    static saveProduct() {
        Products.push(this);
        return this;
    }
    static updateProduct() {
        const productIndex = Products.findIndex(p => p.id === this.id);
        if (productIndex) {
            Products.splice(index, 1, this);
            return this;
        } else {
            return new Error('Product Not Found');
        }
    }
    static fetchAllProducts() {
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