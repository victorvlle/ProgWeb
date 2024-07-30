import { products } from '../models/productModel.js';
let nextId = 7;
export const listProducts = (req, res) => {
    res.render('productList', { products });
};
export const showProductForm = (req, res) => {
    const productId = req.params.id ? parseInt(req.params.id) : null;
    const product = products.find(p => p.id === productId) || { id: null, name: '', price: '' };
    res.render('productForm', { product });
};
export const addProduct = (req, res) => {
    const { name, price } = req.body;
    const newProduct = { id: nextId++, name, price: parseFloat(price) };
    products.push(newProduct);
    res.redirect('/products');
};
export const updateProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price } = req.body;
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex] = { id: productId, name, price: parseFloat(price) };
    }
    res.redirect('/products');
};
export const deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
    }
    res.redirect('/products');
};
