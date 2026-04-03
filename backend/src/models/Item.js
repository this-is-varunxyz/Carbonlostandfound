// src/models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['lost', 'found'], required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  contactName: { type: String, required: true },
  contactPhone: { type: String, required: true },
  image: { type: String, default: null } // We will store image URLs here later
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Item', itemSchema);