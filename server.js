const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mockup database (replace with a real database in production)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Serve static files (like your HTML and CSS)
app.use(express.static('public'));

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists in the database
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
