/**
 * Questionnaire Controller
 * Handles questionnaire-related operations
 */

// Predefined questionnaire questions
const questions = [
  {
    id: 1,
    question: "What is your expected user traffic?",
    type: "select",
    options: [
      { value: "low", label: "Low (< 1,000 users/day)" },
      { value: "medium", label: "Medium (1,000 - 10,000 users/day)" },
      { value: "high", label: "High (> 10,000 users/day)" },
      { value: "variable", label: "Variable/Unpredictable" }
    ],
    required: true,
    category: "traffic"
  },
  {
    id: 2,
    question: "What is the complexity of your application?",
    type: "select",
    options: [
      { value: "low", label: "Simple (Basic CRUD operations)" },
      { value: "medium", label: "Moderate (Multiple features, integrations)" },
      { value: "high", label: "Complex (Advanced business logic, multiple systems)" }
    ],
    required: true,
    category: "complexity"
  },
  {
    id: 3,
    question: "What is your team size?",
    type: "select",
    options: [
      { value: "small", label: "Small (1-3 developers)" },
      { value: "medium", label: "Medium (4-8 developers)" },
      { value: "large", label: "Large (8+ developers)" }
    ],
    required: true,
    category: "team"
  },
  {
    id: 4,
    question: "What are your scalability requirements?",
    type: "select",
    options: [
      { value: "low", label: "Low (No significant growth expected)" },
      { value: "medium", label: "Medium (Moderate growth expected)" },
      { value: "high", label: "High (Rapid growth expected)" }
    ],
    required: true,
    category: "scalability"
  },
  {
    id: 5,
    question: "What is your budget constraint?",
    type: "select",
    options: [
      { value: "low", label: "Low (Limited budget)" },
      { value: "medium", label: "Medium (Moderate budget)" },
      { value: "high", label: "High (Generous budget)" }
    ],
    required: true,
    category: "budget"
  },
  {
    id: 6,
    question: "What are your security requirements?",
    type: "select",
    options: [
      { value: "low", label: "Basic (Standard security)" },
      { value: "medium", label: "Moderate (Enhanced security)" },
      { value: "high", label: "High (Enterprise-level security)" }
    ],
    required: true,
    category: "security"
  },
  {
    id: 7,
    question: "What are your maintenance requirements?",
    type: "select",
    options: [
      { value: "low", label: "Low (Minimal maintenance)" },
      { value: "medium", label: "Medium (Regular maintenance)" },
      { value: "high", label: "High (Frequent updates and maintenance)" }
    ],
    required: true,
    category: "maintenance"
  },
  {
    id: 8,
    question: "What is your deployment preference?",
    type: "select",
    options: [
      { value: "simple", label: "Simple (Single deployment)" },
      { value: "moderate", label: "Moderate (Multiple environments)" },
      { value: "complex", label: "Complex (Distributed deployment)" }
    ],
    required: true,
    category: "deployment"
  }
];

/**
 * Get questionnaire questions
 */
const getQuestions = async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        questions: questions,
        totalQuestions: questions.length,
        categories: ['traffic', 'complexity', 'team', 'scalability', 'budget', 'security', 'maintenance', 'deployment']
      }
    });
  } catch (error) {
    console.error('Error getting questions:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve questions',
      error: error.message
    });
  }
};

/**
 * Submit questionnaire responses
 */
const submitQuestionnaire = async (req, res) => {
  try {
    const { responses } = req.body;
    
    // Validate responses
    if (!responses || !Array.isArray(responses)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid responses format'
      });
    }
    
    // Validate that all required questions are answered
    const requiredQuestions = questions.filter(q => q.required);
    const answeredQuestions = responses.map(r => r.questionId);
    
    const missingQuestions = requiredQuestions.filter(q => 
      !answeredQuestions.includes(q.id)
    );
    
    if (missingQuestions.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Missing required questions',
        missingQuestions: missingQuestions.map(q => q.id)
      });
    }
    
    // Process responses into requirements format
    const requirements = {};
    responses.forEach(response => {
      const question = questions.find(q => q.id === response.questionId);
      if (question) {
        requirements[question.category] = response.answer;
      }
    });
    
    // Add additional derived requirements
    requirements.userTraffic = requirements.traffic;
    requirements.teamSize = requirements.team;
    
    // Store questionnaire response (optional - for analytics)
    const questionnaireData = {
      timestamp: new Date(),
      responses: responses,
      requirements: requirements,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    };
    
    // For now, we'll just return the processed requirements
    // In a full implementation, you'd save this to the database
    
    res.json({
      success: true,
      message: 'Questionnaire submitted successfully',
      data: {
        requirements: requirements,
        processedAt: new Date(),
        totalResponses: responses.length
      }
    });
    
  } catch (error) {
    console.error('Error submitting questionnaire:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit questionnaire',
      error: error.message
    });
  }
};

/**
 * Get questionnaire history (placeholder for future implementation)
 */
const getHistory = async (req, res) => {
  try {
    // This would typically fetch from database
    res.json({
      success: true,
      message: 'History feature not implemented yet',
      data: []
    });
  } catch (error) {
    console.error('Error getting history:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve history',
      error: error.message
    });
  }
};

module.exports = {
  getQuestions,
  submitQuestionnaire,
  getHistory
}; 