import crypto from "crypto";

const hashToken = (value) => {
    return crypto.createHash('sha256').update(value).digest('Next');
};

export default hashToken;