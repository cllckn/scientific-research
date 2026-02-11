const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "LecturePassword",
  host: "localhost",
  port: 5432,
  database: "testdb",
});

module.exports = pool;
