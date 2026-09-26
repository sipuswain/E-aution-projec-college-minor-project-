const db = require("../config/db");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { full_name, email, password, role } = req.body;

    if (!full_name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
   // validate role
    if (role !== "bidder" && role !== "seller") {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    // validate password length

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    //normalize email to lowercase
    const normalizedEmail = email.trim().toLowerCase();



    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
            INSERT INTO users (full_name, email, password, role)
            VALUES (?, ?, ?, ?)
        `;

    db.query(sql, [full_name, normalizedEmail, hashedPassword, role], (err, result) => {
    if (err) {
      console.error("Registration error:", err.message);

      if (err.code === "ER_DUP_ENTRY") {
        return res.status(409).json({
          success: false,
          message: "Email already registered",
        });
      }

      return res.status(500).json({
        success: false,
        message: "User registration failed",
      });
    }

      res.status(201).json({
        success: true,
        message: "User registered successfully",
        userId: result.insertId,
      });
    });
  } catch (error) {
    console.error("Registration error:", error.message);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  registerUser,
};
