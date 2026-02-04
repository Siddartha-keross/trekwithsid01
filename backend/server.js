const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const trekRoutes = require('./routes/trekRoutes'); // ADD THIS: Import Routes
const bookingRoutes = require('./routes/bookingRoutes'); // Existing Booking Routes

// 1. Load Config
dotenv.config();

// 2. Connect to Database
connectDB();

// 3. Initialize App
const app = express();

// 4. Middleware (Allows Frontend to talk to Backend)
app.use(cors()); 
app.use(express.json()); // Allows us to accept JSON data in the body

// ADD THIS: Mount the routes
app.use('/api/treks', trekRoutes);
app.use('/api/bookings', bookingRoutes);

// 5. Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// 6. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});