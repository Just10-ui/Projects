import { Router } from 'express';
import { findProducts, viewProducts } from '../controller/productController.js';

const productRouter = Router();

productRouter.get('/', viewProducts);
productRouter.get('/:productName', findProducts);

export default productRouter;