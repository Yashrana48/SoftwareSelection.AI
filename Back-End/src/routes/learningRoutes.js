const express = require('express');
const router = express.Router();
const learningController = require('../controllers/learningController');

// Get learning hub content
router.get('/hub', learningController.getLearningHub);

// Get case studies
router.get('/case-studies', learningController.getCaseStudies);

// Get specific case study
router.get('/case-study/:id', learningController.getCaseStudyById);

// Get best practices
router.get('/best-practices', learningController.getBestPractices);

// Get architecture comparison
router.get('/comparison', learningController.getArchitectureComparison);

module.exports = router; 