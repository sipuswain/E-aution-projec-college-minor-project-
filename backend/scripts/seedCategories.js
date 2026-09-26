const mysql = require("mysql2");

require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

const categories = [
  ["Electronics", "Laptops, phones, computers and electronic devices"],
  ["Vehicles", "Cars, motorcycles and other vehicles"],
  ["Furniture", "Home and office furniture"],
  ["Machinery", "Industrial and commercial machinery"],
  ["Property", "Land, houses and commercial properties"],
];

const sql = `
    INSERT IGNORE INTO auction_categories
    (category_name, description)
    VALUES ?
`;

db.query(sql, [categories], (err) => {
  if (err) {
    console.error("Category seeding failed:", err.message);
    db.end();
    return;
  }

  console.log("Auction categories seeded successfully!");

  db.end();
});
