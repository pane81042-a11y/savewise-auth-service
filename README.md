# SaveWise Auth Service

SaveWise Auth Service is the authentication and account security service for the SaveWise platform.

It handles sign up, login, token workflows, password reset, account verification, and user authentication concerns as a separate service in the overall polyrepo architecture.

## Features

- User registration
- User login
- Password hashing
- JWT access token support
- Refresh token support
- Forgot password and reset password flow
- Email verification support
- Secure authentication middleware integration
- Account protection and validation

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Email provider integration

## Getting Started

### 1. Clone the repository
```bash
git clone <your-savewise-auth-service-repo-url>
cd savewise-auth-service
```
### 2. Install dependencies
```bash
npm install
```
### 3. Create environment variables
- Create a .env file and configure the required environment variables.
- Example:
```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
CLIENT_URL=http://localhost:5173
EMAIL_FROM=your_email_address
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
EMAIL_USER=your_email_username
EMAIL_PASS=your_email_password
```
### 4. Start the development server
```bash
npm run dev
```
### Scripts
```bash
npm run dev
npm run start
npm run lint
```

## Service Responsibility
This service is responsible for identity, authentication, password recovery, and token management.

## Related Repositories
- SaveWise Client
- SaveWise API
- SaveWise Shared
- SaveWise UI
- SaveWise Infra
