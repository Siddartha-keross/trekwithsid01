const Booking = require('../models/Booking');

// @desc    Create a new booking
// @route   POST /api/bookings
const createBooking = async (req, res) => {
  // ... (keep your existing code here) ...
  console.log("Request Body:", req.body);
  console.log("Entering here in booking creation");

    const { trekId, name, email, phone, trekDate, travelers, totalPrice } = req.body;
    console.log("Entering here in booking creation");
    const booking = await Booking.create({
      trekId,
      user: { name, email, phone },
      trekDate,
      travelers,
      totalPrice,
    });
    res.status(201).json(booking);

};

// ADD THIS NEW FUNCTION 👇
// @desc    Get all bookings
// @route   GET /api/bookings
const getBookings = async (req, res) => {
  try {
    // .populate() replaces the 'trekId' with the actual Trek details (name, image)
    const bookings = await Booking.find({}).populate('trekId', 'name');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createBooking, getBookings };