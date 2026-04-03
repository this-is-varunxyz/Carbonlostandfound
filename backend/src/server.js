// src/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');

// Initialize Express
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors()); // Allows your React frontend to communicate with this backend
app.use(express.json()); // Allows Express to parse JSON data sent in requests

// Routes
app.use('/api/items', itemRoutes);

// Base Route for testing
app.get('/', (req, res) => {
  res.send('Campus Lost & Found API is running...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[ SYSTEM ] Server initialized on port ${PORT}`);
});