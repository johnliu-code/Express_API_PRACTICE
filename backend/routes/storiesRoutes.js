const express = require('express');
const router = express.Router();
const { getStories, setStory, updateStory, deleteStory } = require('../controllers/storiesController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getStories).post(protect, setStory);
router.route('/:id').delete(protect, deleteStory).put(protect, updateStory);

module.exports = router;