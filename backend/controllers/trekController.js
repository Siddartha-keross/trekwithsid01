const Trek = require('../models/Trek');

// @desc    Fetch all treks
// @route   GET /api/treks
// @access  Public
const getTreks = async (req, res) => {
  try {
    const treks = await Trek.find({});
    res.json(treks);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch single trek by ID
// @route   GET /api/treks/:id
// @access  Public

const getTrekById = async (req, res) => {
  try {
    const trek = await Trek.findById(req.params.id);

    if (trek) {
      // from mongoose we get a document, we can directly send it as json

      res.json(trek);
    } else {
      res.status(404).json({ message: 'Trek not found' });
    }
  } catch (error) {
    // If ID format is invalid (e.g. random text), return 404
    res.status(404).json({ message: 'Trek not found' });
  }
};

module.exports = { getTreks, getTrekById };