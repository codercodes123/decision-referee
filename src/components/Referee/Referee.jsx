import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Referee.module.css';
import ConstraintSelector from './ConstraintSelector';
import ComparisonPanel from './ComparisonPanel';
import { evaluateConstraints, formatConstraintSummary, getRuleCount } from '../../referee';

export default function Referee() {
  const [constraints, setConstraints] = useState({
    expertise: null,
    scale: null,
    timeToMarket: null,
    riskTolerance: null
  });
  const [results, setResults] = useState(null);
  const [constraintSummary, setConstraintSummary] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  const allSelected = Object.values(constraints).every((v) => v !== null);
  const ruleCount = getRuleCount();

  const handleCompare = () => {
    if (!allSelected) return;
    setIsLocked(true);
    setConstraintSummary(formatConstraintSummary(constraints));
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
    setIsLocked(false);
  };

  return (
    <section className={styles.referee}>
      {/* How This Tool Works - Above Constraint Selector */}
      <div className={styles.howItWorks}>
        <h4 className={styles.howItWorksTitle}>How This Tool Works</h4>
        <ul className={styles.howItWorksList}>
          <li>Select explicit constraints that reflect your real-world context</li>
          <li>Deterministic rules translate constraints into architectural consequences</li>
          <li>The tool explains trade-offs without choosing for you</li>
        </ul>
      </div>

      {/* Constraint Selection */}
      <div className={styles.constraintSection}>
        <ConstraintSelector
          values={constraints}
          onChange={setConstraints}
          disabled={isLocked}
        />

        <div className={styles.buttonRow}>
          <button
            className={styles.compareButton}
            onClick={handleCompare}
            disabled={!allSelected || isLocked}
          >
            Compare
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

        {/* Determinism Disclosure - Below Compare Button */}
        <div className={styles.determinismDisclosure}>
          This comparison is generated using deterministic rules.
          Given the same constraints, the output will always be identical.
          No AI, scoring, ranking, or recommendation logic is used.
        </div>
      </div>

      {results && (
        <motion.div
          className={styles.resultsSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Constraint Summary */}
          <div className={styles.constraintSummary}>
            Constraints applied: {constraintSummary}
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
              <li>Architectural judgment remains with the user</li>
            </ul>
          </div>
        </motion.div>
      )}
    </section>
  );
}
