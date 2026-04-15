import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import env from "../config/env.js";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            trim: true,
            minLength: [3, 'Username must be at least 3 characters'],
            maxLength: [30, 'Username cannot exceed 30 characters'],
            unique: true
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            unique: true,
            match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minLength: [8, 'Password must be at least 8 characters'],
            select: false,
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        lastLoginAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre('save', async function savePassword(next) {
    if (!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(env.bcryptSaltRounds);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function matchPassword(enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;