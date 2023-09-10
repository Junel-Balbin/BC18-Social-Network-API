// Importing the Express router.
const router = require('express').Router();

// Importing routes for friends, reactions, thoughts and users.
const friendRoutes = require('./friendRoutes');
const reactionRoutes = require('./reactionsRoutes');
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// // Setting up the routes.
router.use('/friend', friendRoutes);
router.use('/reaction', reactionRoutes);
router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

// Exporting the router.
module.exports = router;