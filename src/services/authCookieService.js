import env from "../config/env.js";

export const getRefreshCookieOptions = () => {
    const isProduction = env.nodeEnv === 'production';

    return {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'none' : 'lax',
        signed: true,
        path: '/',
        maxAge: 7 * 24 * 60 * 60 * 1000
    };
};

export const clearRefreshCookie = (res) => {
    res.clearCookie('refreshToken', {
        path: '/',
        httpOnly: true,
        secure: env.nodeEnv === 'production',
        sameSite: env.nodeEnv === 'production' ? 'none' : 'lax',
        signed: true
    });
};