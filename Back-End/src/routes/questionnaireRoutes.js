const express = require('express');
const router = express.Router();
const questionnaireController = require('../controllers/questionnaireController');

// Get questionnaire questions
router.get('/questions', questionnaireController.getQuestions);

// Submit questionnaire responses
router.post('/submit', questionnaireController.submitQuestionnaire);

// Get questionnaire history (if needed)
router.get('/history', questionnaireController.getHistory);

module.exports = router; 