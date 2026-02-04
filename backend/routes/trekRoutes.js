const express = require('express');
const router = express.Router();
const { getTreks, getTrekById } = require('../controllers/trekController');

// Route for "/" (e.g., http://localhost:5000/api/treks)
router.get('/', getTreks);

// Route for "/:id" (e.g., http://localhost:5000/api/treks/12345)
router.get('/:id', getTrekById);

module.exports = router;