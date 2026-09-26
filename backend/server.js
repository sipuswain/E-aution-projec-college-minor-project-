const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./config/db");
require("dotenv").config();

const app = express();
const testRoutes =require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", testRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("E-Auction Backend is running!");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
