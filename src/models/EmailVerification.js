import mongoose from "mongoose";

const emailVerificationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true
        },
        tokenHash: {
            type: String,
            required: true,
        },
        expiresAt: {
            type: Date,
            required: true
        },
        verifiedAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
);

const EmailVerification = mongoose.model('EmailVerification', emailVerificationSchema);

export default EmailVerification;