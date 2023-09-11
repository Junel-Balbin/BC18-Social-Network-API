// Importing the Express router.
const router = require('express').Router();

// Importing routes for thoughts and users.
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// // Setting up the routes.
router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

// Exporting the router.
module.exports = router;