const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/upload', authMiddleware, contentController.uploadContent);

module.exports = router;
