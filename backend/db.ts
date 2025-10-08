import mongoose from "mongoose";

const MONGO_URL = 'mongodb+srv://divyankh444:8WHTMSTcKQDpIjGo@cluster0.ymjmmnx.mongodb.net/Paynzer'

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;