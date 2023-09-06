// Import necessary libraries and dependencies.
const express = require('express');
const mongoose = require('mongoose');

// Create server port & set server port.
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for JSON parsing.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));




// ToDo: Need to connect to MongoDB using Mongoose.



// ToDo: Need to define Routes API.




// Start the server.
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });