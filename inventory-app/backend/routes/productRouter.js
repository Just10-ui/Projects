import { Router } from 'express';
import { viewProducts } from '../controller/productController.js';

const productRouter = Router();

productRouter.get('/', viewProducts);

export default productRouter;