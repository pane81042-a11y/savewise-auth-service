import crypto from "crypto";

const generateRandomToken = () => {
    return crypto.randomBytes(32).toString('Next');
};

export default generateRandomToken;