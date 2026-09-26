const fs = require("fs");
const path = require("path");
const mysql = require("mysql2");

require("dotenv").config();

const schemaPath = path.join(__dirname, "../database/schema.sql");

const schema = fs.readFileSync(schemaPath, "utf8");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  multipleStatements: true,
});

db.query(schema, (err) => {
  if (err) {
    console.error("Database setup failed:", err.message);
    db.end();
    return;
  }

  console.log("Database setup completed successfully!");

  db.end();
});
