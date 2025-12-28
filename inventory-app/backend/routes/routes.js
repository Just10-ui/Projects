import { Router } from 'express';
import { viewProduct } from '../controller/productRoutes.js';
import { parseJson } from '../middleware/middleware.js';

const router = Router();

router.get('/', parseJson, viewProduct);

export default router;