const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  url: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comments: [{ type: String }],
}, { timestamps: true });

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
