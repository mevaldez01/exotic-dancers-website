const Content = require('../models/Content');

exports.getUserAnalytics = async (req, res) => {
  try {
    const userContent = await Content.find({ user: req.user.userId });
    const analytics = {
      totalContent: userContent.length,
      totalViews: userContent.reduce((sum, content) => sum + content.views, 0),
      totalLikes: userContent.reduce((sum, content) => sum + content.likes, 0),
      totalComments: userContent.reduce((sum, content) => sum + content.comments.length, 0),
    };
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

