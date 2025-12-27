import express from 'express';
import dotenv from 'dotenv';
import productRoutes from '../routes/productRoutes.js';
import { parseJson } from '../middleware/middleware.js';

dotenv.config()

const port = process.env.PORT;
const app = express();

app.use('/products', parseJson, productRoutes);

app.listen(port, () => {
  console.log(`PORT running in http://localhost:${port}`);
});