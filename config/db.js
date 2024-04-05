
const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDatabase() {
  try {
    // const DB_URL = process.env.DB_URL;
    const DB_URL = process.env.DB_CONNECT;

    await mongoose.connect(DB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectToDatabase;
