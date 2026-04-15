import AuthToken from "../models/AuthToken.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";
import generateRandomToken from "../utils/generateRandomToken.js";
import hashToken from "../utils/hashToken.js";

export const issueAuthTokens = async (user) => {
    const accessToken = generateAccessToken({
        id: user._id,
        email: user.email,
        role: user.role
    });

    const refreshToken = generateRefreshToken({
        id: user._id,
        email: user.email,
        role: user.role,
        nonce: generateRandomToken()
    });

    const refreshTokenHash = hashToken(refreshToken);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await AuthToken.create({
        user: user._id,
        tokenHash: refreshTokenHash,
        type: 'refresh',
        expiresAt
    });

    return {
        accessToken,
        refreshToken
    };
};

export const revokeRefreshToken = async (refreshToken) => {
    const tokenHash = hashToken(refreshToken);

    await AuthToken.findOneAndDelete(
        { tokenHash, type: 'refresh', isRevoked: false },
        { isRevoked: true },
        { new: true }
    );
};