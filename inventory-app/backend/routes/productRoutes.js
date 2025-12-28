import { Router } from 'express';
import { addProduct, deleteProduct, findProducts, getProducts, updateProduct } from '../controller/productController.js';

const router = Router();

router.post('/add', addProduct);
router.get('/', getProducts);
router.delete('/', deleteProduct);
router.get('/:productName', findProducts);
router.put('/:productId', updateProduct);

export default router;