/**
 * Recommendation Controller
 * Handles AI-generated architecture recommendations
 */

const aiEngine = require('../services/aiEngine');

/**
 * Generate architecture recommendation
 */
const generateRecommendation = async (req, res) => {
  try {
    const { requirements } = req.body;
    
    // Validate requirements
    if (!requirements || typeof requirements !== 'object') {
      return res.status(400).json({
        success: false,
        message: 'Invalid requirements format'
      });
    }
    
    // Required fields validation
    const requiredFields = ['userTraffic', 'complexity', 'teamSize', 'scalability', 'budget'];
    const missingFields = requiredFields.filter(field => !requirements[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        missingFields: missingFields
      });
    }
    
    // Generate recommendation using AI engine
    const result = aiEngine.generateRecommendation(requirements);
    
    if (!result.success) {
      return res.status(500).json({
        success: false,
        message: 'Failed to generate recommendation',
        error: result.error
      });
    }
    
    // Add metadata to response
    const response = {
      ...result,
      metadata: {
        generatedAt: new Date(),
        requirements: requirements,
        engineVersion: '1.0.0',
        confidence: result.analysis.topScore
      }
    };
    
    res.json(response);
    
  } catch (error) {
    console.error('Error generating recommendation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate recommendation',
      error: error.message
    });
  }
};

/**
 * Get all available architectures
 */
const getAllArchitectures = async (req, res) => {
  try {
    const architectures = aiEngine.getAllArchitectures();
    
    res.json({
      success: true,
      data: {
        architectures: architectures,
        total: architectures.length
      }
    });
    
  } catch (error) {
    console.error('Error getting architectures:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve architectures',
      error: error.message
    });
  }
};

/**
 * Get all design patterns
 */
const getAllDesignPatterns = async (req, res) => {
  try {
    const patterns = aiEngine.getAllDesignPatterns();
    
    res.json({
      success: true,
      data: {
        patterns: patterns,
        total: patterns.length
      }
    });
    
  } catch (error) {
    console.error('Error getting design patterns:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve design patterns',
      error: error.message
    });
  }
};

/**
 * Get specific architecture by ID
 */
const getArchitectureById = async (req, res) => {
  try {
    const { id } = req.params;
    const architectures = aiEngine.getAllArchitectures();
    const architecture = architectures.find(arch => arch.id === id);
    
    if (!architecture) {
      return res.status(404).json({
        success: false,
        message: 'Architecture not found'
      });
    }
    
    // Get related design patterns
    const relatedPatterns = aiEngine.getDesignPatterns(id);
    
    res.json({
      success: true,
      data: {
        architecture: architecture,
        relatedPatterns: relatedPatterns
      }
    });
    
  } catch (error) {
    console.error('Error getting architecture:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve architecture',
      error: error.message
    });
  }
};

/**
 * Get specific design pattern by ID
 */
const getPatternById = async (req, res) => {
  try {
    const { id } = req.params;
    const patterns = aiEngine.getAllDesignPatterns();
    const pattern = patterns.find(p => p.id === id);
    
    if (!pattern) {
      return res.status(404).json({
        success: false,
        message: 'Design pattern not found'
      });
    }
    
    res.json({
      success: true,
      data: {
        pattern: pattern
      }
    });
    
  } catch (error) {
    console.error('Error getting design pattern:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve design pattern',
      error: error.message
    });
  }
};

module.exports = {
  generateRecommendation,
  getAllArchitectures,
  getAllDesignPatterns,
  getArchitectureById,
  getPatternById
}; 