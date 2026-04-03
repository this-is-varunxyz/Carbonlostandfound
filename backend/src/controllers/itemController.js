const Item = require('../models/Item');

// @desc    Get all items (with optional search/filter)
// @route   GET /api/items
exports.getItems = async (req, res) => {
  try {
    const { type, search } = req.query;
    
    // Build a query object based on what the frontend asks for
    let query = {};
    if (type && type !== 'all') {
      query.type = type;
    }
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Fetch from database, sorting by newest first
    const items = await Item.find(query).sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Create a new item
// @route   POST /api/items
exports.createItem = async (req, res) => {
  try {
    const { title, description, type, location, date, contactName, contactPhone } = req.body;
    
    // Cloudinary automatically attaches the uploaded file info to req.file
    const imageUrl = req.file ? req.file.path : null;

    const newItem = await Item.create({
      title,
      description,
      type,
      location,
      date,
      contactName,
      contactPhone,
      image: imageUrl // Save the secure URL to MongoDB
    });

    res.status(201).json({ message: 'Item created successfully', item: newItem });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create item', error: error.message });
  }
};