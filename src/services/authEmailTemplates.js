export const buildPasswordResetEmail = ({ username, resetToken }) => {
    const subject = 'Reset your SaveWise password';
    const text = `Hello ${username}, use this token to reset your password: ${resetToken}`;
    const html = `
        <div>
            <h2>Reset your SaveWise password</h2>
            <p>Hello ${username},</p>
            <p>Use the token below to reset your password:</p>
            <p><strong>${resetToken}</strong></p>
            <p>If you did not request this, you can ignore this email.</p>
        </div>
    `;

    return { subject, text, html };
};

export const buildEmailVerificationEmail = ({ username, verificationToken }) => {
    const subject = 'Verify your SaveWise account';
    const text = `Hello ${username}, use this token to verify your account: ${verificationToken}`;
    const html = `
        <div>
            <h2>Verify your SaveWise account</h2>
            <p>Hello ${username},</p>
            <p>Use the token below to verify your account:</p>
            <p><strong>${verificationToken}</strong></p>
            <p>Welcome to SaveWise.</p>
        </div>
    `;

    return { subject, text, html };
};