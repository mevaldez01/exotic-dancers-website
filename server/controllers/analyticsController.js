const Content = require('../models/Content');

exports.getAnalytics = async (req, res) => {
  try {
    const content = await Content.find({ user: req.userId });
    const analytics = content.map(item => ({
      id: item._id,
      title: item.title,
      views: item.views,
      likes: item.likes,
      comments: item.comments.length,
    }));
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
