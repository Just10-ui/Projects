import { Router } from 'express';
import { parseJson, corsJson } from '../middleware/middleware.js';
import productRouter from '../routes/productRoutes.js';

const router = Router();

router.use('/products', parseJson, corsJson, productRouter);

export default router;