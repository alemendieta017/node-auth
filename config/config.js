require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  nodemailer_pwd: process.env.NODEMAILER_PWD,
  senderEmail: process.env.SENDER_EMAIL,
  smtpHost: process.env.SMTP_HOST,
};

module.exports = { config };
