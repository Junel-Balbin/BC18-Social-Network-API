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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-network-api", {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Log Mongo queries that is being executed.
mongoose.set("debug", true);

// Define routes for different parts of the API.
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);
app.use('/api/friends', friendRoutes);

// Start the server.
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });