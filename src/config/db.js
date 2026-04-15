import mongoose from "mongoose";
import env from "./env.js";

const connectDB = async () => {
    if (!env.mongoUri) {
        throw new Error('MONGODB_URI is missing in environment variables');
    }

    try {
        const conn = await mongoose.connect(env.mongoUri);

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;