import { Request, Response } from 'express';
import { Product, products } from '../models/productModel.js';

let nextId = 7;

export const listProducts = (req: Request, res: Response) => {
    res.render('productList', { products });
};

export const showProductForm = (req: Request, res: Response) => {
    const productId = req.params.id ? parseInt(req.params.id) : null;
    const product = products.find(p => p.id === productId) || { id: null, name: '', price: '' };
    res.render('productForm', { product });
};

export const addProduct = (req: Request, res: Response) => {
    const { name, price } = req.body;
    const newProduct: Product = { id: nextId++, name, price: parseFloat(price) };
    products.push(newProduct);
    res.redirect('/products');
};

export const updateProduct = (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    const { name, price } = req.body;
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex] = { id: productId, name, price: parseFloat(price) };
    }
    res.redirect('/products');
};

export const deleteProduct = (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
    }
    res.redirect('/products');
};
