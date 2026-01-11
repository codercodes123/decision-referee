import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      {/* Section Title */}
      <h2 className={styles.title}>About This Referee</h2>

      {/* Core Statement */}
      <div className={styles.block}>
        <p className={styles.coreStatement}>
          This referee does not choose architectures.
        </p>
        <p className={styles.coreStatement}>
          It exposes the consequences of choosing under explicit constraints.
        </p>
        <p className={styles.coreStatement}>
          Conflicting strengths and weaknesses are intentional.
        </p>
        <p className={styles.coreStatement}>
          The final judgment remains with the engineering team.
        </p>
      </div>

      {/* API Styles - Concise Definitions */}
      <div className={styles.block}>
        <h3 className={styles.subtitle}>API Styles Under Evaluation</h3>
        <div className={styles.techGrid}>
          <div className={`${styles.techItem} ${styles.techRest}`}>
            <h4 className={styles.techName}>REST</h4>
            <p className={styles.techDesc}>
              Resource-oriented HTTP APIs with stateless communication. 
              Broad tooling support and mature operational patterns.
            </p>
          </div>
          <div className={`${styles.techItem} ${styles.techGraphql}`}>
            <h4 className={styles.techName}>GraphQL</h4>
            <p className={styles.techDesc}>
              Query-based APIs with strongly typed schemas. 
              Flexible data fetching through a single endpoint.
            </p>
          </div>
          <div className={`${styles.techItem} ${styles.techGrpc}`}>
            <h4 className={styles.techName}>gRPC</h4>
            <p className={styles.techDesc}>
              High-performance RPC using binary protocols. 
              Optimized for low-latency service-to-service communication.
            </p>
          </div>
        </div>
      </div>

      {/* Trade-off Philosophy */}
      <div className={styles.tradeoffNote}>
        <p>Trade-offs are not resolved — they are revealed.</p>
        <p className={styles.finalClarity}>This tool exists to inform judgment — not replace it.</p>
      </div>
    </section>
  );
}
