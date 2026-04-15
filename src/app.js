import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

import env from "./config/env.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(
    cors({
        origin: (origin, callback) => {
            // allow requests with no origin (like Postman, curl)
            if (!origin) return callback(null, true);

            if (env.allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error(`CORS not allowed for origin: ${origin}`));
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ["Content-Type", "Authorization"],
        exposedHeaders: ['Set-Cookie']
    })
);

app.options('*', cors());

app.use(helmet());
app.use(morgan(env.nodeEnv === 'development' ? 'dev' : 'combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(env.cookieSecret));

const globalLimiter = rateLimit({
    windowMs: env.rateLimitWindowMs,
    max: env.rateLimitMax,
    message: {
        success: false,
        message: 'Too many requests. Please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(globalLimiter);

app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'SaveWise auth service is running'
    });
});

app.use(notFound);
app.use(errorHandler);

export default app;