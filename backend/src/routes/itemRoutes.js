const express = require('express');
const router = express.Router();
const { getItems, createItem } = require('../controllers/itemController');
const upload = require('../config/cloudinary');

router.route('/')
  .get(getItems)
  // Add upload.single('image') middleware here
  .post(upload.single('image'), createItem); 

module.exports = router;