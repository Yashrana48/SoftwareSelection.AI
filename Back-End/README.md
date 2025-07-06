# AI-Driven Software Architecture Decision System - Backend

## Overview
This is the backend API for the AI-Driven Software Architecture Decision System, a research project by Yash Rana (K2256939) for Kingston University.

## Features
- **AI Engine**: Rule-based decision system for architecture recommendations
- **Questionnaire System**: Dynamic questionnaire for project requirements
- **Learning Hub**: Educational content and case studies
- **RESTful API**: Complete API for frontend integration

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/architecture_decision_system
CORS_ORIGIN=http://localhost:3000
JWT_SECRET=your-secret-key-change-in-production
LOG_LEVEL=info
```

### 3. Start Development Server
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### Base URL: `http://localhost:5000/api`

### Questionnaire Routes
- `GET /questionnaire/questions` - Get questionnaire questions
- `POST /questionnaire/submit` - Submit questionnaire responses
- `GET /questionnaire/history` - Get questionnaire history

### Recommendation Routes
- `POST /recommendations/generate` - Generate architecture recommendation
- `GET /recommendations/architectures` - Get all architectures
- `GET /recommendations/patterns` - Get all design patterns
- `GET /recommendations/architecture/:id` - Get specific architecture
- `GET /recommendations/pattern/:id` - Get specific design pattern

### Learning Routes
- `GET /learning/hub` - Get learning hub content
- `GET /learning/case-studies` - Get case studies
- `GET /learning/case-study/:id` - Get specific case study
- `GET /learning/best-practices` - Get best practices
- `GET /learning/comparison` - Get architecture comparison

## Project Structure
```
src/
├── controllers/          # Request handlers
│   ├── questionnaireController.js
│   ├── recommendationController.js
│   └── learningController.js
├── routes/              # API route definitions
│   ├── questionnaireRoutes.js
│   ├── recommendationRoutes.js
│   └── learningRoutes.js
├── services/            # Business logic
│   └── aiEngine.js      # Core AI decision engine
├── config/              # Configuration files
│   ├── database.js
│   └── environment.js
└── server.js            # Main server file
```

## AI Engine Features
- **Rule-based Decision System**: Evaluates project requirements
- **Architecture Scoring**: Calculates suitability scores
- **Design Pattern Matching**: Recommends relevant patterns
- **Case Study Integration**: Real-world examples

## Supported Architectures
- Monolithic Architecture
- Microservices Architecture
- Serverless Architecture
- Service-Oriented Architecture (SOA)

## Design Patterns
- Singleton Pattern
- Factory Pattern
- Observer Pattern
- MVC Pattern
- Repository Pattern
- Circuit Breaker Pattern

## Testing
```bash
npm test
```

## Production Deployment
```bash
npm start
```

## Research Context
This system is part of a dissertation research project investigating the application of AI in software architecture decision-making. The goal is to bridge the gap between theoretical frameworks and practical implementation for small teams and startups.

## Author
Yash Rana (K2256939) - Kingston University 