import { Router } from 'express';
import { addProduct, deleteProduct, getProducts } from '../controller/productController.js';

const router = Router();

router.post('/add', addProduct);
router.get('/', getProducts);
router.delete('/', deleteProduct);

export default router;