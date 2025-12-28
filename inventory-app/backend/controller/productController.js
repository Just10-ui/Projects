import pool from '../database/db.js';

export const addProduct = async (req, res) => {
  const { name, type, price, amount } = req.body;

  try {
    const result = await pool.query('INSERT INTO products(name, type, price, amount) VALUES ($1, $2, $3, $4) RETURNING *;', [name, type, price, amount]);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: `Server can't be reached`});
  }
};

export const getProducts = async (req, res) => {
  const result = await pool.query('SELECT * FROM products;');
  const sorted = result.rows;

  sorted.sort((a, b) => a.name.localeCompare(b.name));

  try {
    res.status(202).json(sorted);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: `Server can't be reached`});
  }
};

export const deleteProduct = async (req, res) => {
  const { ids } = req.body;

  if (ids.length === 0) {
    res.status(400).json({error: 'Bad request'});
  };

  try {
    const result = await pool.query('DELETE FROM products WHERE id = ANY($1::int[]);', [ids]);

    res.json({deleted: 'Deleted successfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({error: `Server can't be reached`});
  }
};

export const findProducts = async (req, res) => {
  const productName = req.params.productName;
  const regex = new RegExp(productName, 'gi');

  try {
    const result = await pool.query('SELECT * FROM products;');
    const matched = result.rows.filter(items => regex.test(items.name));

    if(matched.length === 0) return res.status(404).json({message: `No products named: ${productName}`});

    res.json(matched);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: `Server can't be reached`});
  }
};

export const updateProduct = async (req, res) => {
  const productId = req.params.productId;
  const { name, type, price, amount } = req.body;

  try {
    const result = await pool.query('UPDATE products SET name = $1, type = $2, price = $3, amount = $4 WHERE id = $5 RETURNING *;', [name, type, price, amount, productId]);

    if(result.rows.length === 0) {
      return res.status(404).json({message: 'Product not found'});
    } 

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: `Server can't be reached`});
  }
}