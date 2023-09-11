// Importing the Express router.
const router = require('express').Router();

// Importing the API routes from the 'api' folder.
const apiRoutes = require('./api');

// Using the '/api' route for the imported API routes
router.use('/api', apiRoutes);

// Error message when handling request with wrong routes.
router.use((req, res) => {
    return res.send('Error Wrong Route 😝.');
});

// Exporting the router.
module.exports = router;