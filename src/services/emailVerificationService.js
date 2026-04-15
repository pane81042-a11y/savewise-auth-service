import EmailVerification from "../models/EmailVerification.js";
import generateRandomToken from "../utils/generateRandomToken.js";
import hashToken from "../utils/hashToken.js";

export const createEmailVerificationToken = async (userId) => {
    const rawToken = generateRandomToken();
    const tokenHash = hashToken(rawToken);
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await EmailVerification.deleteMany({
        user: userId,
        verifiedAt: null
    });

    await EmailVerification.create({
        user: userId,
        tokenHash,
        expiresAt
    });

    return rawToken;
};