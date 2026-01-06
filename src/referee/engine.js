/**
 * Decision Referee - Evaluation Engine
 * 
 * ═══════════════════════════════════════════════════════════════
 * PURE, DETERMINISTIC EVALUATION FUNCTION
 * Same input ALWAYS produces same output. No exceptions.
 * ═══════════════════════════════════════════════════════════════
 * 
 * GUARANTEES:
 * - Deterministic: Same input → same output (always)
 * - No side effects: Does not modify any external state
 * - No randomness: No Math.random(), no Date.now() in logic
 * - No async: Synchronous execution only
 * - Transparent: All triggered rules are tracked with full metadata
 */

import { rules, RULE_COUNT } from './rules.js';
import { validateConstraints, freezeConstraints } from './types.js';

/**
 * Human-readable labels for constraint values.
 */
const CONSTRAINT_LABELS = {
  expertise: {
    beginner: 'Beginner expertise',
    intermediate: 'Intermediate expertise',
    expert: 'Expert expertise'
  },
  scale: {
    small: 'Small scale',
    medium: 'Medium scale',
    large: 'Large scale'
  },
  timeToMarket: {
    fast: 'Fast delivery',
    balanced: 'Balanced delivery'
  },
  riskTolerance: {
    low: 'Low risk tolerance',
    medium: 'Medium risk tolerance',
    high: 'High risk tolerance'
  }
};

/**
 * Generates a human-readable trigger label from rule conditions.
 * @param {Object} when - Rule conditions
 * @returns {string}
 */
function formatTriggerLabel(when) {
  const parts = [];
  for (const [key, value] of Object.entries(when)) {
    if (CONSTRAINT_LABELS[key] && CONSTRAINT_LABELS[key][value]) {
      parts.push(CONSTRAINT_LABELS[key][value]);
    }
  }
  return parts.join(' + ');
}

/**
 * Checks if a rule's conditions match the given constraints.
 * A rule matches if ALL specified conditions in rule.when are satisfied.
 * 
 * @param {Object} when - Rule conditions
 * @param {Object} constraints - User constraints
 * @returns {boolean}
 */
function ruleMatches(when, constraints) {
  for (const [key, value] of Object.entries(when)) {
    if (constraints[key] !== value) {
      return false;
    }
  }
  return true;
}

/**
 * Creates an empty option result structure.
 * @returns {import('./types').OptionResult}
 */
function createEmptyOptionResult() {
  return {
    strengths: [],
    weaknesses: [],
    tradeoffs: [],
    triggeredRules: []
  };
}

/**
 * Determines which impact types a rule contributes to an option.
 * @param {Object} impact
 * @returns {string[]}
 */
function getContributedTypes(impact) {
  const types = [];
  if (impact?.strengths?.length) types.push('strength');
  if (impact?.weaknesses?.length) types.push('weakness');
  if (impact?.tradeoffs?.length) types.push('trade-off');
  return types;
}

/**
 * Determines which options are affected by a rule's impacts.
 * @param {Object} impacts
 * @returns {string[]}
 */
function getAffectedOptions(impacts) {
  const affected = [];
  if (impacts.rest) affected.push('REST');
  if (impacts.graphql) affected.push('GraphQL');
  if (impacts.grpc) affected.push('gRPC');
  return affected;
}

/**
 * Appends impacts from a rule to an option result.
 * 
 * @param {import('./types').OptionResult} result
 * @param {import('./types').OptionImpact} impact
 * @param {import('./types').DecisionRule} rule
 * @param {string[]} allAffectedOptions
 */
function appendImpacts(result, impact, rule, allAffectedOptions) {
  if (!impact) return;
  
  const contributedTypes = getContributedTypes(impact);
  
  if (impact.strengths) {
    result.strengths.push(...impact.strengths);
  }
  if (impact.weaknesses) {
    result.weaknesses.push(...impact.weaknesses);
  }
  if (impact.tradeoffs) {
    result.tradeoffs.push(...impact.tradeoffs);
  }
  
  // Add triggered rule with full metadata for transparency
  const alreadyTracked = result.triggeredRules.some(r => r.id === rule.id);
  if (!alreadyTracked && contributedTypes.length > 0) {
    result.triggeredRules.push({
      id: rule.id,
      description: rule.description,
      triggerLabel: formatTriggerLabel(rule.when),
      affectedOptions: allAffectedOptions,
      contributedTypes: contributedTypes
    });
  }
}

/**
 * Evaluates constraints against all rules and produces structured results.
 * 
 * THIS IS THE CORE REFEREE ENGINE.
 * It is a pure, deterministic function with full traceability.
 * 
 * @param {import('./types').ConstraintSet} constraints
 * @returns {import('./types').EvaluationResult}
 * @throws {Error} If constraints are invalid
 */
export function evaluateConstraints(constraints) {
  // Validate and freeze input to prevent mutation
  if (!validateConstraints(constraints)) {
    throw new Error('Invalid constraints: all fields must be present with valid values');
  }
  const frozenConstraints = freezeConstraints(constraints);

  // Initialize empty result buckets
  const result = {
    rest: createEmptyOptionResult(),
    graphql: createEmptyOptionResult(),
    grpc: createEmptyOptionResult(),
    totalRulesEvaluated: RULE_COUNT,
    totalRulesTriggered: 0
  };

  // Track unique triggered rules
  const triggeredRuleIds = new Set();

  // Iterate through all rules in definition order (deterministic)
  for (const rule of rules) {
    if (ruleMatches(rule.when, frozenConstraints)) {
      triggeredRuleIds.add(rule.id);
      const affectedOptions = getAffectedOptions(rule.impacts);
      
      appendImpacts(result.rest, rule.impacts.rest, rule, affectedOptions);
      appendImpacts(result.graphql, rule.impacts.graphql, rule, affectedOptions);
      appendImpacts(result.grpc, rule.impacts.grpc, rule, affectedOptions);
    }
  }

  result.totalRulesTriggered = triggeredRuleIds.size;

  return result;
}

/**
 * Formats constraints into a human-readable summary string.
 * 
 * @param {import('./types').ConstraintSet} constraints
 * @returns {string}
 */
export function formatConstraintSummary(constraints) {
  const labels = {
    expertise: { beginner: 'Beginner', intermediate: 'Intermediate', expert: 'Expert' },
    scale: { small: 'Small', medium: 'Medium', large: 'Large' },
    timeToMarket: { fast: 'Fast', balanced: 'Balanced' },
    riskTolerance: { low: 'Low', medium: 'Medium', high: 'High' }
  };

  return [
    `${labels.expertise[constraints.expertise]} team`,
    `${labels.scale[constraints.scale]} scale`,
    `${labels.timeToMarket[constraints.timeToMarket]} delivery`,
    `${labels.riskTolerance[constraints.riskTolerance]} risk`
  ].join(' · ');
}

/**
 * Returns the total number of rules in the system.
 * @returns {number}
 */
export function getRuleCount() {
  return RULE_COUNT;
}
