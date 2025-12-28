import pool from '../database/db.js';

export const viewProduct = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products;');
    const sorted = result.rows.sort((a, b) => a.name.localeCompare(b.name));

    res.status(200).json({message: 'Success', products: sorted});
  } catch (error) {
    res.status(500).json({message: 'Database is not responding'});
    console.log(error);
  }
};