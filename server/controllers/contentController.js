const Content = require('../models/Content');

exports.uploadContent = async (req, res) => {
  const { type, url, title, description } = req.body;
  try {
    const newContent = new Content({
      type,
      url,
      title,
      description,
      user: req.userId,
    });
    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
