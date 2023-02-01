const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser, deleteUser, updateUser } = require('../controllers/usersController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);


module.exports = router;