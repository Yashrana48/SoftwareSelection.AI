/**
 * AI Engine Service
 * Core decision-making logic for architecture recommendations
 */

// Architecture definitions with criteria
const architectures = {
  monolithic: {
    name: 'Monolithic Architecture',
    description: 'Single, unified application where all components are tightly coupled',
    advantages: ['Simple deployment', 'Easy to develop', 'Lower initial cost', 'Simpler testing'],
    disadvantages: ['Poor scalability', 'Hard to maintain', 'Technology lock-in', 'Single point of failure'],
    bestFor: ['Small applications', 'Simple business logic', 'Limited user base', 'Quick prototypes'],
    criteria: {
      userTraffic: 'low',
      complexity: 'low',
      teamSize: 'small',
      scalability: 'low',
      budget: 'low'
    },
    score: 0
  },
  
  microservices: {
    name: 'Microservices Architecture',
    description: 'Collection of small, independent services that communicate via APIs',
    advantages: ['High scalability', 'Fault isolation', 'Technology diversity', 'Independent deployment'],
    disadvantages: ['Complex DevOps', 'Network overhead', 'Data consistency challenges', 'Higher initial cost'],
    bestFor: ['Large applications', 'High traffic', 'Complex business logic', 'Multiple teams'],
    criteria: {
      userTraffic: 'high',
      complexity: 'high',
      teamSize: 'large',
      scalability: 'high',
      budget: 'high'
    },
    score: 0
  },
  
  serverless: {
    name: 'Serverless Architecture',
    description: 'Event-driven architecture where code runs in response to events',
    advantages: ['No server management', 'Cost-effective', 'Auto-scaling', 'Pay-per-use'],
    disadvantages: ['Limited control', 'Cold start issues', 'Vendor lock-in', 'Debugging complexity'],
    bestFor: ['Event-driven applications', 'Variable workloads', 'Cost-sensitive projects', 'Quick deployments'],
    criteria: {
      userTraffic: 'variable',
      complexity: 'medium',
      teamSize: 'small',
      scalability: 'high',
      budget: 'medium'
    },
    score: 0
  },
  
  soa: {
    name: 'Service-Oriented Architecture (SOA)',
    description: 'Architecture where services are loosely coupled and reusable',
    advantages: ['Loose coupling', 'Service reusability', 'Standards-based', 'Enterprise integration'],
    disadvantages: ['High initial setup cost', 'Complex governance', 'Performance overhead', 'Learning curve'],
    bestFor: ['Enterprise applications', 'Legacy integration', 'Multiple systems', 'Large organizations'],
    criteria: {
      userTraffic: 'medium',
      complexity: 'high',
      teamSize: 'large',
      scalability: 'medium',
      budget: 'high'
    },
    score: 0
  }
};

// Design patterns mapping
const designPatterns = {
  singleton: {
    name: 'Singleton Pattern',
    description: 'Ensures a class has only one instance',
    useCase: 'Database connections, logging, configuration management',
    architecture: ['monolithic', 'microservices', 'soa']
  },
  
  factory: {
    name: 'Factory Pattern',
    description: 'Creates objects without specifying their exact class',
    useCase: 'Object creation, dependency injection, plugin systems',
    architecture: ['monolithic', 'microservices', 'soa']
  },
  
  observer: {
    name: 'Observer Pattern',
    description: 'Defines a one-to-many dependency between objects',
    useCase: 'Event handling, notifications, real-time updates',
    architecture: ['microservices', 'serverless', 'soa']
  },
  
  mvc: {
    name: 'Model-View-Controller (MVC)',
    description: 'Separates application logic into three interconnected components',
    useCase: 'Web applications, user interfaces, data management',
    architecture: ['monolithic', 'soa']
  },
  
  repository: {
    name: 'Repository Pattern',
    description: 'Abstracts data persistence logic',
    useCase: 'Data access, database operations, caching',
    architecture: ['monolithic', 'microservices', 'soa']
  },
  
  circuitBreaker: {
    name: 'Circuit Breaker Pattern',
    description: 'Prevents cascading failures in distributed systems',
    useCase: 'Service communication, fault tolerance, resilience',
    architecture: ['microservices', 'soa']
  }
};

/**
 * Evaluate project requirements and calculate architecture scores
 */
const evaluateArchitecture = (requirements) => {
  const scores = {};
  
  Object.keys(architectures).forEach(archKey => {
    const architecture = architectures[archKey];
    let score = 0;
    
    // Score based on user traffic
    if (requirements.userTraffic === architecture.criteria.userTraffic) {
      score += 25;
    } else if (requirements.userTraffic === 'medium' && architecture.criteria.userTraffic === 'high') {
      score += 15;
    } else if (requirements.userTraffic === 'high' && architecture.criteria.userTraffic === 'low') {
      score -= 10;
    }
    
    // Score based on complexity
    if (requirements.complexity === architecture.criteria.complexity) {
      score += 20;
    } else if (requirements.complexity === 'medium' && architecture.criteria.complexity === 'high') {
      score += 10;
    }
    
    // Score based on team size
    if (requirements.teamSize === architecture.criteria.teamSize) {
      score += 20;
    }
    
    // Score based on scalability requirements
    if (requirements.scalability === architecture.criteria.scalability) {
      score += 25;
    } else if (requirements.scalability === 'high' && architecture.criteria.scalability === 'low') {
      score -= 15;
    }
    
    // Score based on budget
    if (requirements.budget === architecture.criteria.budget) {
      score += 10;
    } else if (requirements.budget === 'low' && architecture.criteria.budget === 'high') {
      score -= 20;
    }
    
    // Additional factors
    if (requirements.security === 'high' && archKey === 'microservices') {
      score += 10; // Microservices offer better security isolation
    }
    
    if (requirements.maintenance === 'low' && archKey === 'monolithic') {
      score += 5; // Monolithic is easier to maintain for simple apps
    }
    
    scores[archKey] = Math.max(0, score); // Ensure non-negative scores
  });
  
  return scores;
};

/**
 * Get recommended design patterns for an architecture
 */
const getDesignPatterns = (architectureType) => {
  return Object.keys(designPatterns).filter(patternKey => {
    return designPatterns[patternKey].architecture.includes(architectureType);
  }).map(patternKey => designPatterns[patternKey]);
};

/**
 * Generate architecture recommendation
 */
const generateRecommendation = (requirements) => {
  try {
    // Evaluate all architectures
    const scores = evaluateArchitecture(requirements);
    
    // Sort architectures by score (descending)
    const sortedArchitectures = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    
    // Get top 3 recommendations
    const recommendations = sortedArchitectures.slice(0, 3).map(archKey => {
      const architecture = architectures[archKey];
      const score = scores[archKey];
      const patterns = getDesignPatterns(archKey);
      
      return {
        architecture: {
          type: archKey,
          name: architecture.name,
          description: architecture.description,
          advantages: architecture.advantages,
          disadvantages: architecture.disadvantages,
          bestFor: architecture.bestFor,
          score: score,
          confidence: Math.min(100, Math.max(0, score))
        },
        designPatterns: patterns,
        reasoning: generateReasoning(requirements, architecture, score)
      };
    });
    
    return {
      success: true,
      recommendations: recommendations,
      analysis: {
        totalEvaluated: Object.keys(architectures).length,
        topScore: Math.max(...Object.values(scores)),
        averageScore: Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length
      }
    };
    
  } catch (error) {
    console.error('Error generating recommendation:', error);
    return {
      success: false,
      error: 'Failed to generate recommendation',
      message: error.message
    };
  }
};

/**
 * Generate reasoning for recommendation
 */
const generateReasoning = (requirements, architecture, score) => {
  const reasons = [];
  
  if (requirements.userTraffic === 'high' && architecture.criteria.userTraffic === 'high') {
    reasons.push('High user traffic requirement aligns with this architecture\'s scalability capabilities');
  }
  
  if (requirements.complexity === 'high' && architecture.criteria.complexity === 'high') {
    reasons.push('Complex project requirements match this architecture\'s design principles');
  }
  
  if (requirements.scalability === 'high' && architecture.criteria.scalability === 'high') {
    reasons.push('Scalability requirements are well-suited for this architecture type');
  }
  
  if (requirements.budget === 'low' && architecture.criteria.budget === 'low') {
    reasons.push('Budget constraints align with this architecture\'s cost-effectiveness');
  }
  
  if (reasons.length === 0) {
    reasons.push('This architecture provides a balanced approach for your project requirements');
  }
  
  return reasons;
};

/**
 * Get all available architectures
 */
const getAllArchitectures = () => {
  return Object.keys(architectures).map(key => ({
    id: key,
    ...architectures[key]
  }));
};

/**
 * Get all design patterns
 */
const getAllDesignPatterns = () => {
  return Object.keys(designPatterns).map(key => ({
    id: key,
    ...designPatterns[key]
  }));
};

module.exports = {
  generateRecommendation,
  getAllArchitectures,
  getAllDesignPatterns,
  evaluateArchitecture,
  getDesignPatterns
}; 