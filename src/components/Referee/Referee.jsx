import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Referee.module.css';
import ConstraintSelector from './ConstraintSelector';
import ComparisonPanel from './ComparisonPanel';
import { evaluateConstraints, formatConstraintSummary, getRuleCount } from '../../referee';
import { generateInsight } from './insightGenerator';

export default function Referee() {
  const [constraints, setConstraints] = useState({
    expertise: null,
    scale: null,
    timeToMarket: null,
    riskTolerance: null
  });
  const [results, setResults] = useState(null);
  const [constraintSummary, setConstraintSummary] = useState('');
  const [insight, setInsight] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  const allSelected = Object.values(constraints).every((v) => v !== null);
  const ruleCount = getRuleCount();

  const handleCompare = () => {
    if (!allSelected) return;
    setIsLocked(true);
    setConstraintSummary(formatConstraintSummary(constraints));
    setInsight(generateInsight(constraints));
    setResults(evaluateConstraints(constraints));
  };

  const handleReset = () => {
    setConstraints({
      expertise: null,
      scale: null,
      timeToMarket: null,
      riskTolerance: null
    });
    setResults(null);
    setConstraintSummary('');
    setInsight('');
    setIsLocked(false);
  };

  return (
    <section className={styles.referee}>
      {/* Decision Timeline - Linear Process Visualization */}
      <div className={styles.decisionTimeline}>
        <div className={styles.timelineStep}>Design Discussion</div>
        <div className={styles.timelineSeparator}>—</div>
        <div className={`${styles.timelineStep} ${styles.timelineStepActive}`}>Constraint Declaration</div>
        <div className={styles.timelineSeparator}>—</div>
        <div className={styles.timelineStep}>Risk Exposure</div>
        <div className={styles.timelineSeparator}>—</div>
        <div className={styles.timelineStep}>ADR Commitment</div>
      </div>

      {/* How This Referee Evaluates Risk */}
      <div className={styles.howItWorks}>
        <h4 className={styles.howItWorksTitle}>How This Referee Evaluates Risk</h4>
        <ul className={styles.howItWorksList}>
          <li>You declare the constraints under which the system must operate</li>
          <li>Deterministic rules translate constraints into architectural consequences</li>
          <li>The referee exposes trade-offs and risk boundaries without choosing for you</li>
        </ul>
      </div>

      {/* Constraint Declaration Section */}
      <div className={styles.constraintSection}>
        <div className={styles.constraintHeader}>
          <h4 className={styles.constraintTitle}>Declare the conditions this system must survive</h4>
          <p className={styles.constraintSubtext}>These constraints define risk exposure — not preferences.</p>
        </div>

        <ConstraintSelector
          values={constraints}
          onChange={setConstraints}
          disabled={isLocked}
        />

        {/* Decision Stress Test */}
        <div className={styles.stressTest}>
          <span className={styles.stressTestLabel}>Decision Stress Test</span>
          <p className={styles.stressTestInstruction}>
            Change exactly one constraint at a time to observe how architectural risk shifts.
          </p>
        </div>

        <div className={styles.buttonRow}>
          <button
            className={styles.compareButton}
            onClick={handleCompare}
            disabled={!allSelected || isLocked}
          >
            Evaluate
          </button>
          {isLocked && (
            <button
              className={styles.resetButton}
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {results && (
        <motion.div
          className={styles.resultsSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Determinism Banner - Visible */}
          <div className={styles.determinismBanner}>
            This output is generated using deterministic, rule-based logic.
            Given the same constraints, the output will always be identical.
            No AI, scoring, ranking, or recommendations are used.
          </div>

          {/* Architectural Warning */}
          <div className={styles.insightCallout}>
            <span className={styles.insightLabel}>Architectural Warning</span>
            <p className={styles.insightText}>{insight}</p>
            <p className={styles.insightDisclaimer}>
              This warning does not invalidate any option. It highlights risk accumulation under current constraints.
            </p>
          </div>

          {/* Constraint Summary */}
          <div className={styles.constraintSummary}>
            Constraints applied: {constraintSummary}
          </div>

          {/* Consequences Header */}
          <div className={styles.consequencesHeader}>
            The following consequences emerge under the declared constraints.
          </div>

          {/* Rule Evaluation Summary Bar */}
          <div className={styles.ruleSummaryBar}>
            {ruleCount} deterministic rules evaluated · {results.totalRulesTriggered} rules triggered by your constraints
          </div>

          {/* Comparison Panels */}
          <div className={styles.panelsGrid}>
            <ComparisonPanel data={results.rest} name="REST" />
            <ComparisonPanel data={results.graphql} name="GraphQL" />
            <ComparisonPanel data={results.grpc} name="gRPC" />
          </div>

          {/* Transparency Guarantees Footer */}
          <div className={styles.transparencyFooter}>
            <ul>
              <li>Rules are human-readable without running the app</li>
              <li>Same inputs always produce the same outputs</li>
              <li>Architectural judgment remains with the engineering team</li>
            </ul>
          </div>
        </motion.div>
      )}
    </section>
  );
}
