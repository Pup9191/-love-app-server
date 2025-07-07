console.log("Starting server...");

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

let userLogins = [];

app.post('/login', (req, res) => {
  const { name, phone, email } = req.body;
  if (name && phone && email) {
    userLogins.push({
      name,
      phone,
      email,
      time: new Date().toLocaleString()
    });
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get('/logins', (req, res) => {
  res.json(userLogins);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});