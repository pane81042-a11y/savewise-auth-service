import nodemailer from "nodemailer";
import env from "../config/env.js";

const transporter = nodemailer.createTransport({
    host: env.emailHost,
    port: env.emailPort,
    secure: env.emailSecure,
    auth: env.emailUser && env.emailPass
        ? {
            user: env.emailUser,
            pass: env.emailPass
        }
        : undefined
});

export const sendEmail = async ({ to, subject, text, html }) => {
    if (!env.emailHost || !env.emailFrom) {
        console.warn('Email settings are incomplete. Email sending skipped.');
        return;
    }

    await transporter.sendMail({
        from: env.emailFrom,
        to,
        subject,
        text,
        html
    });
};