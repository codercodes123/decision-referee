/**
 * Decision Referee - Public API
 * 
 * This module exports the referee engine's public interface.
 * All evaluation logic is contained in the referee/ directory.
 */

export { 
  evaluateConstraints, 
  formatConstraintSummary, 
  getRuleCount 
} from './engine.js';

export { rules, RULE_COUNT } from './rules.js';

export { 
  validateConstraints, 
  freezeConstraints,
  VALID_VALUES,
  TeamExpertise,
  ScaleExpectation,
  TimeToMarket,
  RiskTolerance,
  ImpactType,
  ApiOption
} from './types.js';
