const express = require('express');
const router = express.Router();
const { createBooking, getBookings } = require('../controllers/bookingController');

router.post('/', createBooking);
router.get('/', getBookings); // ADD THIS LINE

module.exports = router;