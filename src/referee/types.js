/**
 * Decision Referee - Type Definitions
 * 
 * Strict type definitions for the constraint model and evaluation results.
 * All types are immutable after creation - no runtime mutation.
 */

// ============================================================
// CONSTRAINT ENUMS
// ============================================================

export const TeamExpertise = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  EXPERT: 'expert'
};

export const ScaleExpectation = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

export const TimeToMarket = {
  FAST: 'fast',
  BALANCED: 'balanced'
};

export const RiskTolerance = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
};

export const ImpactType = {
  STRENGTHS: 'strengths',
  WEAKNESSES: 'weaknesses',
  TRADEOFFS: 'tradeoffs'
};

export const ApiOption = {
  REST: 'rest',
  GRAPHQL: 'graphql',
  GRPC: 'grpc'
};

// ============================================================
// VALID VALUES (for validation)
// ============================================================

export const VALID_VALUES = {
  expertise: Object.values(TeamExpertise),
  scale: Object.values(ScaleExpectation),
  timeToMarket: Object.values(TimeToMarket),
  riskTolerance: Object.values(RiskTolerance)
};

// ============================================================
// TYPE DEFINITIONS (JSDoc for JavaScript)
// ============================================================

/**
 * @typedef {Object} ConstraintSet
 * @property {'beginner' | 'intermediate' | 'expert'} expertise
 * @property {'small' | 'medium' | 'large'} scale
 * @property {'fast' | 'balanced'} timeToMarket
 * @property {'low' | 'medium' | 'high'} riskTolerance
 */

/**
 * @typedef {Object} OptionImpact
 * @property {string[]} [strengths]
 * @property {string[]} [weaknesses]
 * @property {string[]} [tradeoffs]
 */

/**
 * @typedef {Object} RuleImpacts
 * @property {OptionImpact} [rest]
 * @property {OptionImpact} [graphql]
 * @property {OptionImpact} [grpc]
 */

/**
 * @typedef {Object} DecisionRule
 * @property {string} id - Unique rule identifier
 * @property {string} description - Human-readable explanation
 * @property {Partial<ConstraintSet>} when - Trigger conditions
 * @property {RuleImpacts} impacts - Effects when triggered
 */

/**
 * @typedef {Object} TriggeredRule
 * @property {string} id - Rule identifier
 * @property {string} description - Rule explanation
 * @property {string[]} affectedOptions - Which options this rule impacted
 */

/**
 * @typedef {Object} OptionResult
 * @property {string[]} strengths
 * @property {string[]} weaknesses
 * @property {string[]} tradeoffs
 * @property {TriggeredRule[]} triggeredRules
 */

/**
 * @typedef {Object} EvaluationResult
 * @property {OptionResult} rest
 * @property {OptionResult} graphql
 * @property {OptionResult} grpc
 * @property {number} totalRulesEvaluated
 * @property {number} totalRulesTriggered
 */

// ============================================================
// VALIDATION
// ============================================================

/**
 * Validates that a constraint set is complete and valid.
 * Returns false if any field is missing or invalid.
 * 
 * @param {ConstraintSet} constraints
 * @returns {boolean}
 */
export function validateConstraints(constraints) {
  if (!constraints || typeof constraints !== 'object') {
    return false;
  }

  for (const [key, validOptions] of Object.entries(VALID_VALUES)) {
    if (!validOptions.includes(constraints[key])) {
      return false;
    }
  }

  return true;
}

/**
 * Freezes a constraint set to prevent mutation.
 * 
 * @param {ConstraintSet} constraints
 * @returns {Readonly<ConstraintSet>}
 */
export function freezeConstraints(constraints) {
  return Object.freeze({ ...constraints });
}
