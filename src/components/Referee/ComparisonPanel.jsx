import { useState } from 'react';
import styles from './Referee.module.css';

export default function ComparisonPanel({ data, name }) {
  const [showRules, setShowRules] = useState(false);
  const ruleCount = data.triggeredRules.length;

  return (
    <div className={styles.panel}>
      <h3 className={styles.panelTitle}>{name}</h3>
      
      <div className={styles.panelSection}>
        <h4 className={styles.sectionTitle}>Strengths</h4>
        <ul className={styles.bulletList}>
          {data.strengths.length > 0 ? (
            data.strengths.map((item, i) => (
              <li key={i} className={styles.strengthItem}>{item}</li>
            ))
          ) : (
            <li className={styles.emptyItem}>No specific strengths under these constraints</li>
          )}
        </ul>
      </div>

      <div className={styles.panelSection}>
        <h4 className={styles.sectionTitle}>Weaknesses</h4>
        <ul className={styles.bulletList}>
          {data.weaknesses.length > 0 ? (
            data.weaknesses.map((item, i) => (
              <li key={i} className={styles.weaknessItem}>{item}</li>
            ))
          ) : (
            <li className={styles.emptyItem}>No specific weaknesses under these constraints</li>
          )}
        </ul>
      </div>

      <div className={styles.panelSection}>
        <h4 className={styles.sectionTitle}>Trade-offs</h4>
        <ul className={styles.bulletList}>
          {data.tradeoffs.length > 0 ? (
            data.tradeoffs.map((item, i) => (
              <li key={i} className={styles.tradeoffItem}>{item}</li>
            ))
          ) : (
            <li className={styles.emptyItem}>No specific trade-offs identified</li>
          )}
        </ul>
      </div>

      {/* Why This Appeared - Expandable Rule Trace */}
      {ruleCount > 0 && (
        <div className={styles.ruleTrace}>
          <button 
            className={styles.ruleTraceToggle}
            onClick={() => setShowRules(!showRules)}
            aria-expanded={showRules}
          >
            <span className={styles.toggleIcon}>{showRules ? '▾' : '▸'}</span>
            Why this appeared ({ruleCount} rule{ruleCount !== 1 ? 's' : ''})
          </button>
          
          {showRules && (
            <div className={styles.ruleListContainer}>
              {data.triggeredRules.map((rule) => (
                <div key={rule.id} className={styles.ruleItem}>
                  <div className={styles.ruleHeader}>
                    <span className={styles.ruleId}>{rule.id}</span>
                    <span className={styles.ruleTypes}>
                      {rule.contributedTypes.map((type, i) => (
                        <span 
                          key={type} 
                          className={`${styles.typeTag} ${styles[`typeTag${type.charAt(0).toUpperCase() + type.slice(1).replace('-', '')}`]}`}
                        >
                          {type}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className={styles.ruleDesc}>{rule.description}</div>
                  <div className={styles.ruleTrigger}>
                    Triggered by: {rule.triggerLabel}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
