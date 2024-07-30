const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  url: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

module.exports = mongoose.model('Content', ContentSchema);
