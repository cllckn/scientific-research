const ProductRepository = require("./ProductRepository");
const pool = require("../config/db");

class PgProductRepository extends ProductRepository {
  async getAll() {
    const result = await pool.query(
      "SELECT * FROM products ORDER BY id ASC"
    );
    return result.rows;
  }

  async getById(id) {
    const result = await pool.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );
    return result.rows[0] || null;
  }

  async create({ name, price }) {
    const result = await pool.query(
      "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *",
      [name, price]
    );
    return result.rows[0];
  }

  async update(id, { name, price }) {
    const result = await pool.query(
      "UPDATE products SET name=$1, price=$2 WHERE id=$3 RETURNING *",
      [name, price, id]
    );
    return result.rows[0] || null;
  }

  async patch(id, { name, price }) {
    const result = await pool.query(
      `UPDATE products
       SET name  = COALESCE($1, name),
           price = COALESCE($2, price)
       WHERE id = $3
       RETURNING *`,
      [name, price, id]
    );
    return result.rows[0] || null;
  }

  async delete(id) {
    const result = await pool.query(
      "DELETE FROM products WHERE id=$1 RETURNING *",
      [id]
    );
    return result.rows[0] || null;
  }
}

module.exports = PgProductRepository;
