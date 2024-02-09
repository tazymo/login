const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// Endpoint for handling continue action
app.post('/continue', (req, res) => {
  // Implement redirection logic here
  res.redirect('https://tazymo.github.io/tazymo/');
});

// Endpoint for handling decline action
app.post('/decline', (req, res) => {
  // No redirection, just respond with a message
  res.status(200).send('Access declined.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
