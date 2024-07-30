import { Router } from 'express';
import {
    listProducts,
    showProductForm,
    addProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';

const router = Router();

router.get('/products', listProducts);
router.get('/products/new', showProductForm);
router.get('/products/edit/:id', showProductForm);
router.post('/products', addProduct);
router.post('/products/:id', updateProduct);
router.post('/products/delete/:id', deleteProduct);

export default router;
