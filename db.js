const mysql = require("mysql2");   // 👈 IMPORTANTE
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "empaticos",
  database: process.env.DB_NAME || "emphatybd",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306
});

db.connect(err => {
  if (err) {
    console.error("Error conectando a MySQL:", err);
    return;
  }
  console.log("Conectado a MySQL");
});

module.exports = db;



