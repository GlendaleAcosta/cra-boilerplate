const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.load({ path: '.env' });

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')));

// Routes
app.get('/*', (req, res) => {
  console.log('getting index')
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Server
app.listen(PORT, () => {
  console.log(`App is up on port ${PORT}`);
});
