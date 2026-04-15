import mongoose from "mongoose";

const PasswordResetSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true
        },
        tokenHash: {
            type: String,
            required: true
        },
        expiresAt: {
            type: Date,
            required: true,
        },
        usedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true
    }
);

const PasswordReset = mongoose.model('Password Reset', PasswordResetSchema);

export default PasswordReset;