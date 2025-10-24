import mongoose from 'mongoose';
import "dotenv/config";
import User from './models/User.js';

// Function to update all users with lastSeen field
const updateUsers = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);
        console.log('✅ Connected to Database');
        
        // Update all users - add lastSeen with current date
        const result = await User.updateMany(
            { lastSeen: { $exists: false } },
            { $set: { lastSeen: new Date() } }
        );
        
        console.log(`✅ Updated ${result.modifiedCount} users with lastSeen field`);
        
        // Get all users to verify
        const users = await User.find({}, 'email fullName lastSeen');
        console.log('\n📊 Current Users:');
        users.forEach((user, index) => {
            console.log(`${index + 1}. ${user.fullName} (${user.email})`);
            console.log(`   lastSeen: ${user.lastSeen || 'متصل الآن'}\n`);
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

updateUsers();
