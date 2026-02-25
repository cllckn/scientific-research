const { Pool } = require("pg");

const pool = new Pool({
  user: "lectureuser",
  password: "lecturepassword",
  host: "localhost",
  port: 5432,
  database: "sr_case_study_1_db",
});

module.exports = pool;
