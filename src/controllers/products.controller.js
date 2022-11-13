import { pool } from "../db.js";

// obtiene todos los productos
export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT P.id, P.name, P.price, P.discount, P.url_image AS image, C.name AS category FROM product P, category C WHERE P.category = C.id");
    if (rows.length <= 0)
      return res.status(404).json({
        message: "not found",
      });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Obtiene todas las categorias
export const getCategories = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM category");
    if (rows.length <= 0)
      return res.status(404).json({
        message: "There are no categories",
      });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Obtiene los productos filtrados por categoria
export const getProductsForCategory = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT P.id, P.name, P.price, P.discount, P.url_image AS image, C.name AS category FROM product P, category C WHERE C.id = P.category AND C.id = ?',
      [req.params.category]
    );
    if (rows.length <= 0)
      return res.status(404).json({
        message: "not found",
      });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Obtiene el o los productos que que tengan igual nombre
export const getProductsForName = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT P.id, P.name, P.price, P.discount, P.url_image AS image, C.name AS category FROM product P, category C WHERE P.category = C.id AND P.name LIKE ?',
      "%" + [req.body.name] + "%"
    );

    if (rows.length <= 0)
      return res.status(404).json({
        message: "not found",
      });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
