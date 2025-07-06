const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const config = {
  // Server Configuration
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  
  // Database Configuration
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/architecture_decision_system',
  
  // CORS Configuration
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
  
  // API Configuration
  API_VERSION: 'v1',
  API_PREFIX: '/api',
  
  // Security Configuration
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
  
  // Rate Limiting
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
  RATE_LIMIT_MAX: 100, // requests per window
  
  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  
  // AI Engine Configuration
  AI_ENGINE_VERSION: '1.0.0',
  MAX_RECOMMENDATIONS: 3,
  
  // Validation
  MAX_QUESTIONNAIRE_LENGTH: 50,
  MIN_QUESTIONNAIRE_LENGTH: 5
};

// Validate required environment variables
const requiredEnvVars = ['NODE_ENV'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.warn(`⚠️ Missing environment variables: ${missingEnvVars.join(', ')}`);
}

module.exports = config;
