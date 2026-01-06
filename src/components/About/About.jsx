import styles from './About.module.css';

export default function About() {
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

      {/* Technologies Explained */}
      <div className={styles.block}>
        <h3 className={styles.subtitle}>API Technologies Compared</h3>
        <div className={styles.techGrid}>
          <div className={styles.techItem}>
            <h4 className={styles.techName}>REST</h4>
            <p className={styles.techDesc}>
              A resource-oriented API style built on standard HTTP methods. 
              Emphasizes stateless communication and broad tooling compatibility. 
              Commonly used for public and internal APIs.
            </p>
          </div>
          <div className={styles.techItem}>
            <h4 className={styles.techName}>GraphQL</h4>
            <p className={styles.techDesc}>
              A query-based API approach where clients specify required data. 
              Uses a strongly typed schema to define available operations. 
              Enables flexible data fetching through a single endpoint.
            </p>
          </div>
          <div className={styles.techItem}>
            <h4 className={styles.techName}>gRPC</h4>
            <p className={styles.techDesc}>
              A high-performance RPC framework using binary protocols. 
              Relies on strict service contracts defined via protocol buffers. 
              Designed for low-latency, internal service-to-service communication.
            </p>
          </div>
        </div>
      </div>

      {/* Constraint Definitions */}
      <div className={styles.block}>
        <h3 className={styles.subtitle}>How Constraints Influence the Comparison</h3>
        <p className={styles.constraintIntro}>
          Constraints represent context, not preferences. They describe the conditions under which 
          each architecture will be evaluated.
        </p>
        <div className={styles.constraintGrid}>
          <div className={styles.constraintItem}>
            <h4 className={styles.constraintName}>Team Expertise</h4>
            <p className={styles.constraintDesc}>
              The team's familiarity with API paradigms and operational complexity.
            </p>
          </div>
          <div className={styles.constraintItem}>
            <h4 className={styles.constraintName}>Scale Expectation</h4>
            <p className={styles.constraintDesc}>
              Anticipated request volume, concurrency, and data throughput.
            </p>
          </div>
          <div className={styles.constraintItem}>
            <h4 className={styles.constraintName}>Time-to-Market</h4>
            <p className={styles.constraintDesc}>
              How critical rapid initial delivery is versus long-term optimization.
            </p>
          </div>
          <div className={styles.constraintItem}>
            <h4 className={styles.constraintName}>Risk Tolerance</h4>
            <p className={styles.constraintDesc}>
              Willingness to accept operational uncertainty or complexity.
            </p>
          </div>
        </div>
      </div>

      {/* Understanding Trade-offs */}
      <div className={styles.block}>
        <h3 className={styles.subtitle}>Understanding Trade-offs</h3>
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
