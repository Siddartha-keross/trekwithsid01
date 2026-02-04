const mongoose = require('mongoose');

const trekSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    days: {
      type: Number,
      required: true,
    },
    altitude: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
      enum: ['Easy', 'Easy-Moderate', 'Moderate', 'Difficult'], // Restricts values to these options
    },
    price: {
      type: Number,
      required: true,
      default: 0.0,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    // The Itinerary is an Array of Objects (Day 1, Day 2, etc.)
    itinerary: [
      {
        day: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String },
      },
    ],
  },
  {
    timestamps: true, // Automatically creates 'createdAt' and 'updatedAt' fields
  }
);

const Trek = mongoose.model('Trek', trekSchema);

module.exports = Trek;