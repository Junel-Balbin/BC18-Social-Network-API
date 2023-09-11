// Import necessary libraries and dependencies.
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Create server port & set server port.
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for JSON parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(express.static('public'));

app.use(require('./routes'));

// Start the server.
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });