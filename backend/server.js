const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const db = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// REGISTER
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, hashedPassword],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Registered successfully");
    }
  );
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) return res.status(500).send(err);

      if (result.length === 0)
        return res.status(404).send("User not found");

      const match = await bcrypt.compare(password, result[0].password);

      if (match) res.send("Login success");
      else res.status(401).send("Wrong password");
    }
  );
});

app.listen(3000, () => console.log("Server running on port 3000"));
