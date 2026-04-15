import dotenv from "dotenv";

dotenv.config();

const env = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: Number(process.env.PORT) || 5001,
    mongoUri: process.env.MONGODB_URI || '',
    clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
    apiUrl: process.env.API_URL || 'http://localhost:5000',

    allowedOrigins: process.env.ALLOWED_ORIGINS
        ? process.env.ALLOWED_ORIGINS.split(',')
        : [clientUrl, apiUrl],

    jwtSecret: process.env.JWT_SECRET || '',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '15m',

    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || '',
    jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',

    cookieSecret: process.env.COOKIE_SECRET || '',
    emailFrom: process.env.EMAIL_FROM || '',
    emailPort: Number(process.env.EMAIL_PORT) || 587,
    emailSecure: process.env.EMAIL_SECURE === 'true',
    emailUser: process.env.EMAIL_USER || '',
    emailPass: process.env.EMAIL_PASS || '',

    bcryptSaltRounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
    rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
    rateLimitMax: Number(process.env.RATE_LIMIT_MAX) || 100
};

export default env;