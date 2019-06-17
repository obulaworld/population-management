require('dotenv').config();

const env = {
  PORT: process.env.PORT || 5000,
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT,
  BUGSNAG_API_KEY: process.env.BUGSNAG_API_KEY,
  NODE_ENV: process.env.NODE_ENV || 'production',
  TRAVEL_READINESS_MAIL_CYCLE: process.env.TRAVEL_READINESS_MAIL_CYCLE,
  REDIRECT_URL: process.env.REDIRECT_URL,
};

module.exports = env;
