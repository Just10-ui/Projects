import pool from '../database/db.js';

export const viewProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products;');
    const sorted = result.rows.sort((a, b) => a.name.localeCompare(b.name));

    res.status(200).json({message: 'Success', products: sorted});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Database is not responding'});
  }
};

export const findProducts = async (req, res) => {
  const productName = req.params.productName;

  try {
    const product = new RegExp(productName, 'gi');
    const allProducts = await pool.query('SELECT * FROM products;');
    const result = allProducts.rows.filter(items => {
      const names = items.name.toLowerCase();
      if (names.match(product)) return items;
    });

    if (result.length === 0) {
      res.status(404).json({message: 'Products not found'});
    } else {
      res.status(200).json({message: 'Success', products: result});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Database is not responding'});
  }
};