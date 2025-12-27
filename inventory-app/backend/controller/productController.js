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

  try {
    res.status(202).json(result.rows);
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