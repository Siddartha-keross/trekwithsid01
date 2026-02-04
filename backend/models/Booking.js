const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    trekId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trek', // Connects this booking to a specific Trek
      required: true,
    },
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
    trekDate: {
      type: Date,
      required: true,
    },
    travelers: {
      type: Number,
      required: true,
      default: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: 'Pending', // Pending -> Confirmed -> Completed
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Booking', bookingSchema);