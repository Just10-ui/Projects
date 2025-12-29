import { Router } from 'express';
import { parseJson } from '../middleware/middleware.js';
import productRoutes from './productRouter.js';

const router = Router();

router.use('/products', parseJson, productRoutes);

export default router;