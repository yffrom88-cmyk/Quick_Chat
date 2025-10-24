import mongoose from 'mongoose';
import "dotenv/config";
import User from './models/User.js';

// Function to clear all users from the database
const clearUsers = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);
        console.log('✅ Connected to Database');
        
        // Delete all users
        const result = await User.deleteMany({});
        console.log(`🗑️  Deleted ${result.deletedCount} users from database`);
        
        // Disconnect
        await mongoose.disconnect();
        console.log('✅ Disconnected from Database');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

clearUsers();
