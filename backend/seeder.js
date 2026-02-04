const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Trek = require('./models/Trek');
const treks = require('./data/treks');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // 1. Clear existing data
    await Trek.deleteMany();

    // 2. Insert new data
    await Trek.insertMany(treks);

    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

importData();