// Imports the modules from Mongoose.
const { connect, connection } = require('mongoose');

// After you create your Heroku application.
// Visit https://dashboard.heroku.com/apps/ 
// Select the application name and add your Atlas connection string as a Config Var.
// Node will look for this environment variable and if it exists, it will use it. 
// Otherwise, it will assume that you are running this application locally.

// Define the database connection string.
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB';

// Connects MongoDB and Mongoose. 
connect(connectionString);

// Exports the connection.
module.exports = connection;