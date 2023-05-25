const mysql = require("mysql2");

console.log(process.env.MYSQL_PASS);

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

const checkConnection = async () => {
  const conn = await pool.query("SELECT 1 + 1 AS solution");

  if (!conn[0][0]?.solution) {
    console.error("❌ Query failed: ", conn[0]);
  } else {
    console.log("✅ MYSQL connection successful.");
  }
};

module.exports = {
  pool,
  checkConnection,
};
