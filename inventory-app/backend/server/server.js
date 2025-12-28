import express from 'express';
import dotenv from 'dotenv';
import productRoutes from '../routes/routes.js'

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`PORT running on http://localhost:${port}`);
});