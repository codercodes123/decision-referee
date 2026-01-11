/**
 * Insight Generator - Architectural Warnings
 * 
 * Generates warning callouts based on selected constraints.
 * These surface risk accumulation patterns, not recommendations.
 * 
 * Rules:
 * - Deterministic: same constraints → same warning
 * - Neutral: no option is favored
 * - Risk-focused: describes where operational risk accumulates
 */

const insights = [
  // Scale-focused warnings
  {
    condition: (c) => c.scale === 'large',
    text: 'Under these constraints, certain options begin accumulating operational risk without immediately failing. Large scale amplifies performance differences and exposes infrastructure limits that remain invisible at smaller volumes.'
  },
  {
    condition: (c) => c.scale === 'small',
    text: 'At small scale, infrastructure overhead and learning curves dominate the risk profile. Performance differences between options may not materialize until scale increases.'
  },
  
  // Expertise-focused warnings
  {
    condition: (c) => c.expertise === 'beginner',
    text: 'Under these constraints, certain options begin accumulating operational risk without immediately failing. Beginner expertise increases the likelihood of misconfiguration and extends debugging timelines for complex architectures.'
  },
  {
    condition: (c) => c.expertise === 'expert',
    text: 'Expert teams can absorb complexity that would overwhelm less experienced teams. However, this trades simplicity for operational control — a trade-off that compounds over time.'
  },
  
  // Time-focused warnings
  {
    condition: (c) => c.timeToMarket === 'fast',
    text: 'Fast delivery pressure reduces tolerance for learning curves and schema complexity. Decisions made under time pressure may require refactoring once constraints relax.'
  },
  {
    condition: (c) => c.timeToMarket === 'balanced',
    text: 'Balanced timelines reveal long-term trade-offs that fast delivery would obscure. Schema-first approaches and custom infrastructure become viable options.'
  },
  
  // Risk-focused warnings
  {
    condition: (c) => c.riskTolerance === 'low',
    text: 'Low risk tolerance narrows viable options toward mature, well-documented patterns. This reduces operational surprise but may limit performance optimization.'
  },
  {
    condition: (c) => c.riskTolerance === 'high',
    text: 'High risk tolerance enables aggressive optimization but accepts operational uncertainty. Performance gains may come at the cost of debugging complexity.'
  },
  
  // Compound warnings
  {
    condition: (c) => c.scale === 'large' && c.expertise === 'beginner',
    text: 'Under these constraints, certain options begin accumulating operational risk without immediately failing. Large scale with beginner expertise creates compounding pressure — infrastructure limits require operational knowledge to navigate safely.'
  },
  {
    condition: (c) => c.scale === 'large' && c.expertise === 'expert',
    text: 'Expert teams at large scale can optimize aggressively, but this trades simplicity for operational control. Capacity planning and infrastructure management become ongoing responsibilities.'
  },
  {
    condition: (c) => c.timeToMarket === 'fast' && c.riskTolerance === 'low',
    text: 'Fast delivery with low risk tolerance creates strong pressure toward familiar patterns. This combination narrows viable options significantly without declaring a winner.'
  },
  {
    condition: (c) => c.expertise === 'beginner' && c.timeToMarket === 'fast',
    text: 'Under these constraints, certain options begin accumulating operational risk without immediately failing. Beginner teams under time pressure face compounding constraints — learning curves become delivery risks.'
  }
];

/**
 * Generates an insight based on the selected constraints.
 * Returns the most specific matching insight (compound rules first).
 * 
 * @param {Object} constraints - Selected constraint values
 * @returns {string} - Observational insight text
 */
export function generateInsight(constraints) {
  // Sort by specificity (more conditions = more specific)
  const sortedInsights = [...insights].sort((a, b) => {
    const aConditions = a.condition.toString().split('&&').length;
    const bConditions = b.condition.toString().split('&&').length;
    return bConditions - aConditions;
  });

  // Return first matching insight (most specific)
  for (const insight of sortedInsights) {
    if (insight.condition(constraints)) {
      return insight.text;
    }
  }

  // Fallback (should never reach)
  return 'Observe how your selected constraints shape the trade-offs across all three options — without determining a single correct answer.';
}
