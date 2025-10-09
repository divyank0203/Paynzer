import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

async function testConnection() {
  console.log('Attempting to connect to the database...');
  console.log('Using URI:', MONGO_URI); // This will show us if the URI is loaded

  if (!MONGO_URI) {
    console.error('❌ MONGO_URI is not defined. Please check your .env file.');
    return;
  }

  try {
    // Attempt to connect with a short timeout
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds
    });
    
    console.log('✅✅✅ Database connection successful!');
  } catch (error) {
    console.error('❌❌❌ Database connection failed.');
    console.error('Error Message:', error.message);
  } finally {
    // Close the connection
    await mongoose.disconnect();
  }
}

testConnection();