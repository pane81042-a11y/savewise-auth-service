import mongoose from "mongoose";

const authTokenSchema = new mongoose.Schema(
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
        type: {
            type: String,
            enum: ['refresh', 'access'],
            default: 'refresh'
        },
        expiresAt: {
            type: Date,
            required: true
        },
        isRevoked: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const AuthToken = mongoose.model('AuthToken', authTokenSchema);

export default AuthToken;