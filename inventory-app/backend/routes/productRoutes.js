import { Router } from 'express';
import pool from '../database/db.js';

const productRouter = Router();

//* adding products
productRouter.post('/add', async (req, res) => {
  const { productName, productPrice } = req.body;

  try {
    const result = await pool.query('INSERT INTO products(product_name, product_price) VALUES($1, $2) RETURNING *;', [productName, productPrice]);
    res.status(201).json({
      message: 'Added successfully',
      product: result.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server is disconnected' });
  }
});

//* view all products
productRouter.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products;');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server is disconnected' });
  }
});

export default productRouter;