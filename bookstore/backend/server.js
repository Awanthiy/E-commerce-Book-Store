const express = require('express');
const cors = require('cors');
const db = require('./db');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Register Route
app.post('/register', async (req, res) => {
  const { fullname, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = 'INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)';
  db.query(sql, [fullname, email, hashedPassword], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Email already exists or database error' });
    }
    res.status(200).json({ message: 'Registered successfully' });
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';

  db.query(sql, [email], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user: { id: user.id, fullname: user.fullname } });
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
