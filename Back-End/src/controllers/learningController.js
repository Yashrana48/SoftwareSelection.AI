/**
 * Learning Controller
 * Handles educational content and learning resources
 */

// Case studies data
const caseStudies = [
  {
    id: 'netflix',
    company: 'Netflix',
    architecture: 'Microservices',
    title: 'Netflix: From Monolith to Microservices',
    description: 'How Netflix transformed from a monolithic architecture to microservices to handle massive scale',
    challenges: [
      'Handling 100+ million users globally',
      'Managing complex content delivery',
      'Ensuring high availability and fault tolerance'
    ],
    solutions: [
      'Adopted microservices architecture',
      'Implemented service mesh for communication',
      'Used cloud-native technologies'
    ],
    results: [
      '99.99% uptime achieved',
      'Reduced deployment time from hours to minutes',
      'Improved fault isolation and recovery'
    ],
    lessons: [
      'Start with bounded contexts',
      'Invest in monitoring and observability',
      'Embrace eventual consistency'
    ],
    year: 2015,
    category: 'scalability'
  },
  {
    id: 'amazon',
    company: 'Amazon',
    architecture: 'SOA/Microservices',
    title: 'Amazon: Service-Oriented Architecture Success',
    description: 'Amazon\'s journey from monolithic to service-oriented architecture',
    challenges: [
      'Managing complex e-commerce operations',
      'Scaling infrastructure globally',
      'Integrating multiple business services'
    ],
    solutions: [
      'Implemented SOA principles',
      'Created independent service teams',
      'Adopted API-first approach'
    ],
    results: [
      'Enabled rapid feature development',
      'Improved system reliability',
      'Reduced operational overhead'
    ],
    lessons: [
      'Focus on service boundaries',
      'Implement proper API governance',
      'Build for failure'
    ],
    year: 2006,
    category: 'enterprise'
  },
  {
    id: 'uber',
    company: 'Uber',
    architecture: 'Event-Driven + Microservices',
    title: 'Uber: Real-time Event Processing at Scale',
    description: 'How Uber handles real-time location tracking and ride matching',
    challenges: [
      'Real-time location tracking',
      'Dynamic pricing calculations',
      'Global scale operations'
    ],
    solutions: [
      'Event-driven architecture',
      'Microservices for different domains',
      'Real-time data processing'
    ],
    results: [
      'Sub-second response times',
      'Handles millions of concurrent users',
      'Improved user experience'
    ],
    lessons: [
      'Design for real-time requirements',
      'Use event sourcing for complex workflows',
      'Implement proper event ordering'
    ],
    year: 2018,
    category: 'real-time'
  },
  {
    id: 'twitter',
    company: 'Twitter',
    architecture: 'Microservices',
    title: 'Twitter: Migration from Monolithic to Microservices',
    description: 'Twitter\'s transformation to handle the "fail whale" problem',
    challenges: [
      'Frequent service outages',
      'Scalability bottlenecks',
      'Complex monolithic codebase'
    ],
    solutions: [
      'Gradual migration to microservices',
      'Implemented service mesh',
      'Adopted containerization'
    ],
    results: [
      'Eliminated "fail whale" errors',
      'Improved system reliability',
      'Faster feature development'
    ],
    lessons: [
      'Migrate incrementally',
      'Focus on high-impact services first',
      'Invest in monitoring and alerting'
    ],
    year: 2014,
    category: 'migration'
  }
];

// Best practices data
const bestPractices = [
  {
    category: 'Scalability',
    practices: [
      'Design for horizontal scaling from the start',
      'Use caching strategies (Redis, CDN)',
      'Implement database sharding for large datasets',
      'Use load balancing for traffic distribution',
      'Consider auto-scaling capabilities'
    ]
  },
  {
    category: 'Security',
    practices: [
      'Implement authentication and authorization',
      'Use HTTPS for all communications',
      'Validate and sanitize all inputs',
      'Implement rate limiting',
      'Regular security audits and updates'
    ]
  },
  {
    category: 'Performance',
    practices: [
      'Optimize database queries',
      'Use connection pooling',
      'Implement proper indexing',
      'Consider asynchronous processing',
      'Monitor and optimize response times'
    ]
  },
  {
    category: 'Maintainability',
    practices: [
      'Follow coding standards and conventions',
      'Write comprehensive documentation',
      'Implement automated testing',
      'Use version control effectively',
      'Regular code reviews and refactoring'
    ]
  }
];

/**
 * Get learning hub content
 */
const getLearningHub = async (req, res) => {
  try {
    const hubContent = {
      overview: {
        title: 'Software Architecture Learning Hub',
        description: 'Comprehensive resources for understanding software architecture patterns and best practices',
        sections: [
          'Architecture Patterns',
          'Design Patterns',
          'Case Studies',
          'Best Practices',
          'Tools and Technologies'
        ]
      },
      quickStart: {
        title: 'Getting Started with Architecture',
        steps: [
          'Understand your project requirements',
          'Evaluate different architecture patterns',
          'Consider scalability and performance needs',
          'Plan for future growth and maintenance',
          'Choose appropriate design patterns'
        ]
      },
      resources: {
        books: [
          'Software Architecture in Practice - Bass et al.',
          'Building Microservices - Sam Newman',
          'Design Patterns - Gang of Four',
          'Clean Architecture - Robert C. Martin'
        ],
        websites: [
          'Martin Fowler\'s Blog',
          'AWS Architecture Center',
          'Microsoft Architecture Center',
          'Google Cloud Architecture Framework'
        ]
      }
    };
    
    res.json({
      success: true,
      data: hubContent
    });
    
  } catch (error) {
    console.error('Error getting learning hub:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve learning hub content',
      error: error.message
    });
  }
};

/**
 * Get case studies
 */
const getCaseStudies = async (req, res) => {
  try {
    const { category, company } = req.query;
    
    let filteredStudies = caseStudies;
    
    if (category) {
      filteredStudies = filteredStudies.filter(study => study.category === category);
    }
    
    if (company) {
      filteredStudies = filteredStudies.filter(study => 
        study.company.toLowerCase().includes(company.toLowerCase())
      );
    }
    
    res.json({
      success: true,
      data: {
        caseStudies: filteredStudies,
        total: filteredStudies.length,
        categories: [...new Set(caseStudies.map(study => study.category))]
      }
    });
    
  } catch (error) {
    console.error('Error getting case studies:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve case studies',
      error: error.message
    });
  }
};

/**
 * Get specific case study by ID
 */
const getCaseStudyById = async (req, res) => {
  try {
    const { id } = req.params;
    const caseStudy = caseStudies.find(study => study.id === id);
    
    if (!caseStudy) {
      return res.status(404).json({
        success: false,
        message: 'Case study not found'
      });
    }
    
    res.json({
      success: true,
      data: {
        caseStudy: caseStudy
      }
    });
    
  } catch (error) {
    console.error('Error getting case study:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve case study',
      error: error.message
    });
  }
};

/**
 * Get best practices
 */
const getBestPractices = async (req, res) => {
  try {
    const { category } = req.query;
    
    let filteredPractices = bestPractices;
    
    if (category) {
      filteredPractices = bestPractices.filter(practice => practice.category === category);
    }
    
    res.json({
      success: true,
      data: {
        bestPractices: filteredPractices,
        total: filteredPractices.length,
        categories: bestPractices.map(practice => practice.category)
      }
    });
    
  } catch (error) {
    console.error('Error getting best practices:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve best practices',
      error: error.message
    });
  }
};

/**
 * Get architecture comparison
 */
const getArchitectureComparison = async (req, res) => {
  try {
    const comparison = {
      title: 'Architecture Pattern Comparison',
      description: 'Detailed comparison of different software architecture patterns',
      comparison: [
        {
          aspect: 'Scalability',
          monolithic: 'Limited - requires full application scaling',
          microservices: 'High - individual service scaling',
          serverless: 'Automatic - cloud provider handles scaling',
          soa: 'Medium - service-level scaling'
        },
        {
          aspect: 'Complexity',
          monolithic: 'Low - single codebase',
          microservices: 'High - distributed system complexity',
          serverless: 'Medium - function-level complexity',
          soa: 'High - service integration complexity'
        },
        {
          aspect: 'Development Speed',
          monolithic: 'Fast - simple development',
          microservices: 'Medium - team coordination required',
          serverless: 'Fast - focused function development',
          soa: 'Medium - service coordination required'
        },
        {
          aspect: 'Cost',
          monolithic: 'Low - simple infrastructure',
          microservices: 'High - complex infrastructure',
          serverless: 'Variable - pay-per-use model',
          soa: 'High - enterprise infrastructure'
        },
        {
          aspect: 'Maintenance',
          monolithic: 'Simple - single application',
          microservices: 'Complex - multiple services',
          serverless: 'Low - managed by cloud provider',
          soa: 'Complex - service governance required'
        }
      ]
    };
    
    res.json({
      success: true,
      data: comparison
    });
    
  } catch (error) {
    console.error('Error getting architecture comparison:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve architecture comparison',
      error: error.message
    });
  }
};

module.exports = {
  getLearningHub,
  getCaseStudies,
  getCaseStudyById,
  getBestPractices,
  getArchitectureComparison
}; 