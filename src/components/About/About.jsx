import { useState } from 'react';
import styles from './About.module.css';

const constraintData = [
  {
    id: 'expertise',
    name: 'Team Expertise',
    summary: 'The team\'s familiarity with API paradigms',
    definition: 'Measures the team\'s experience with API design patterns, operational tooling, and debugging complexity.',
    influence: 'Higher expertise enables adoption of complex architectures; lower expertise favors familiar, well-documented approaches.'
  },
  {
    id: 'scale',
    name: 'Scale Expectation',
    summary: 'Anticipated request volume and throughput',
    definition: 'Represents expected concurrent users, requests per second, and data transfer volumes.',
    influence: 'Large scale amplifies performance differences and operational overhead; small scale reduces infrastructure concerns.'
  },
  {
    id: 'timeToMarket',
    name: 'Time-to-Market',
    summary: 'Delivery timeline pressure',
    definition: 'Indicates how critical rapid initial deployment is relative to long-term architectural optimization.',
    influence: 'Fast timelines favor familiar tooling and minimal setup; balanced timelines allow schema-first approaches.'
  },
  {
    id: 'riskTolerance',
    name: 'Risk Tolerance',
    summary: 'Acceptable operational uncertainty',
    definition: 'Reflects willingness to adopt newer patterns, accept debugging complexity, or manage unfamiliar infrastructure.',
    influence: 'Low tolerance favors mature ecosystems; high tolerance enables performance-optimized or flexible architectures.'
  }
];

export default function About() {
  const [expandedConstraints, setExpandedConstraints] = useState({});

  const toggleConstraint = (id) => {
    setExpandedConstraints(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className={styles.about}>
      {/* Section Title */}
      <h2 className={styles.title}>About Decision Referee</h2>

      {/* What This Tool Does */}
      <div className={styles.block}>
        <p className={styles.description}>
          Decision Referee is a constraint-driven comparison tool for API architectures. 
          It evaluates REST, GraphQL, and gRPC under explicitly selected constraints. 
          The system explains trade-offs instead of recommending a single "best" option. 
          Final architectural judgment remains with the user.
        </p>
      </div>

      {/* Technologies Explained - Colored Cards */}
      <div className={styles.block}>
        <h3 className={styles.subtitle}>API Technologies Compared</h3>
        <div className={styles.techGrid}>
          <div className={`${styles.techItem} ${styles.techRest}`}>
            <h4 className={styles.techName}>REST</h4>
            <p className={styles.techDesc}>
              A resource-oriented API style built on standard HTTP methods. 
              Emphasizes stateless communication and broad tooling compatibility. 
              Commonly used for public and internal APIs.
            </p>
          </div>
          <div className={`${styles.techItem} ${styles.techGraphql}`}>
            <h4 className={styles.techName}>GraphQL</h4>
            <p className={styles.techDesc}>
              A query-based API approach where clients specify required data. 
              Uses a strongly typed schema to define available operations. 
              Enables flexible data fetching through a single endpoint.
            </p>
          </div>
          <div className={`${styles.techItem} ${styles.techGrpc}`}>
            <h4 className={styles.techName}>gRPC</h4>
            <p className={styles.techDesc}>
              A high-performance RPC framework using binary protocols. 
              Relies on strict service contracts defined via protocol buffers. 
              Designed for low-latency, internal service-to-service communication.
            </p>
          </div>
        </div>
      </div>

      {/* Constraint Definitions - Expandable */}
      <div className={styles.block}>
        <h3 className={styles.subtitle}>How Constraints Influence the Comparison</h3>
        <p className={styles.constraintIntro}>
          Constraints represent context, not preferences. They describe the conditions under which 
          each architecture will be evaluated.
        </p>
        <div className={styles.constraintGrid}>
          {constraintData.map((constraint) => (
            <div key={constraint.id} className={styles.constraintItem}>
              <button
                className={styles.constraintToggle}
                onClick={() => toggleConstraint(constraint.id)}
                aria-expanded={expandedConstraints[constraint.id] || false}
              >
                <span className={styles.constraintName}>{constraint.name}</span>
                <span className={styles.constraintSummary}>{constraint.summary}</span>
                <span className={styles.expandIcon}>
                  {expandedConstraints[constraint.id] ? '−' : '+'}
                </span>
              </button>
              <div 
                className={`${styles.constraintExpanded} ${expandedConstraints[constraint.id] ? styles.constraintExpandedVisible : ''}`}
              >
                <div className={styles.constraintDetail}>
                  <span className={styles.detailLabel}>Definition:</span>
                  <span className={styles.detailText}>{constraint.definition}</span>
                </div>
                <div className={styles.constraintDetail}>
                  <span className={styles.detailLabel}>Influence:</span>
                  <span className={styles.detailText}>{constraint.influence}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Understanding Trade-offs - Visual Steps */}
      <div className={styles.block}>
        <h3 className={styles.subtitle}>Understanding Trade-offs</h3>
        <div className={styles.tradeoffSteps}>
          <div className={styles.tradeoffStep}>
            <span className={styles.stepNumber}>1</span>
            <span className={styles.stepText}>Context creates pressure</span>
          </div>
          <div className={styles.tradeoffArrow}>→</div>
          <div className={styles.tradeoffStep}>
            <span className={styles.stepNumber}>2</span>
            <span className={styles.stepText}>Pressure activates consequences</span>
          </div>
          <div className={styles.tradeoffArrow}>→</div>
          <div className={styles.tradeoffStep}>
            <span className={styles.stepNumber}>3</span>
            <span className={styles.stepText}>Consequences conflict</span>
          </div>
        </div>
        <ul className={styles.tradeoffList}>
          <li>A trade-off represents a consequence, not a verdict</li>
          <li>Strengths and weaknesses may appear simultaneously for the same option</li>
          <li>Conflicting impacts are intentional and reflect real-world architecture decisions</li>
          <li>The tool does not resolve trade-offs — it exposes them</li>
        </ul>
      </div>

      {/* Determinism Statement */}
      <div className={styles.determinismNote}>
        <p>
          The comparison is generated using deterministic, rule-based logic. 
          The same constraints will always produce the same output. 
          No AI, scoring, ranking, or recommendation logic is used.
        </p>
      </div>
    </section>
  );
}
