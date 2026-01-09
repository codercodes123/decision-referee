/**
 * Insight Generator - Constraint-Aware Observations
 * 
 * Generates observational callouts based on selected constraints.
 * These are architect-style commentary, not recommendations.
 * 
 * Rules:
 * - Deterministic: same constraints → same insight
 * - Neutral: no option is favored
 * - Observational: describes patterns, not prescriptions
 */

const insights = [
  // Scale-focused observations
  {
    condition: (c) => c.scale === 'large',
    text: 'Notice how large scale amplifies both performance benefits and operational complexity — without making any single option universally superior.'
  },
  {
    condition: (c) => c.scale === 'small',
    text: 'At small scale, infrastructure overhead becomes the dominant factor — observe how this shifts the trade-off balance toward simplicity.'
  },
  
  // Expertise-focused observations
  {
    condition: (c) => c.expertise === 'beginner',
    text: 'With beginner expertise, learning curves become visible constraints — notice how familiarity influences risk across all options.'
  },
  {
    condition: (c) => c.expertise === 'expert',
    text: 'Expert teams unlock advanced patterns — but observe how this shifts trade-offs toward operational complexity rather than eliminating them.'
  },
  
  // Time-focused observations
  {
    condition: (c) => c.timeToMarket === 'fast',
    text: 'Observe how fast delivery pressure reduces tolerance for schema and tooling complexity across all options.'
  },
  {
    condition: (c) => c.timeToMarket === 'balanced',
    text: 'Balanced timelines reveal long-term trade-offs that fast delivery would obscure — notice how schema-first approaches become viable.'
  },
  
  // Risk-focused observations
  {
    condition: (c) => c.riskTolerance === 'low',
    text: 'Under low risk tolerance, mature ecosystems tend to reduce surprise — but may limit flexibility. Neither outcome is inherently correct.'
  },
  {
    condition: (c) => c.riskTolerance === 'high',
    text: 'High risk tolerance enables aggressive optimization — observe how this unlocks strengths while accepting operational uncertainty.'
  },
  
  // Compound observations
  {
    condition: (c) => c.scale === 'large' && c.expertise === 'beginner',
    text: 'Large scale with beginner expertise creates tension — notice how operational risk compounds when complexity exceeds team capability.'
  },
  {
    condition: (c) => c.scale === 'large' && c.expertise === 'expert',
    text: 'Expert teams at large scale can leverage advanced patterns — but observe how this trades accessibility for performance.'
  },
  {
    condition: (c) => c.timeToMarket === 'fast' && c.riskTolerance === 'low',
    text: 'Fast delivery with low risk creates pressure toward familiar patterns — notice how this narrows viable options without declaring a winner.'
  },
  {
    condition: (c) => c.expertise === 'beginner' && c.timeToMarket === 'fast',
    text: 'Beginner teams under time pressure face compounding constraints — observe how learning curves become delivery risks.'
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
