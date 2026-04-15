import PasswordReset from "../models/PasswordReset.js";
import generateRandomToken from "../utils/generateRandomToken.js";
import hashToken from "../utils/hashToken.js";

export const createPasswordResetToken = async (userId) => {
    const rawToken = generateRandomToken();
    const tokenHash = hashToken(rawToken);
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await PasswordReset.deleteMany({
        user: userId,
        usedAt: null
    });

    await PasswordReset.create({
        user: userId,
        tokenHash,
        expiresAt
    });

    return rawToken;
};