const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');

// Generate architecture recommendation
router.post('/generate', recommendationController.generateRecommendation);

// Get all available architectures
router.get('/architectures', recommendationController.getAllArchitectures);

// Get all design patterns
router.get('/patterns', recommendationController.getAllDesignPatterns);

// Get specific architecture details
router.get('/architecture/:id', recommendationController.getArchitectureById);

// Get specific design pattern details
router.get('/pattern/:id', recommendationController.getPatternById);

module.exports = router; 