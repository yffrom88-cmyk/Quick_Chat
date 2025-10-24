import mongoose from 'mongoose';
import "dotenv/config";
import User from './models/User.js';

// Function to check users in the database
const checkUsers = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);
        console.log('✅ Connected to Database');
        
        // Get all users
        const users = await User.find({}, 'email fullName bio createdAt');
        console.log(`\n📊 Total Users: ${users.length}\n`);
        
        users.forEach((user, index) => {
            console.log(`${index + 1}. ${user.fullName} (${user.email})`);
            console.log(`   Bio: ${user.bio}`);
            console.log(`   Created: ${user.createdAt.toLocaleString()}\n`);
        });
        
        // Disconnect
        await mongoose.disconnect();
        console.log('✅ Disconnected from Database');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

checkUsers();
