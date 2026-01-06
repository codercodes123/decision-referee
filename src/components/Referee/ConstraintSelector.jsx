import styles from './Referee.module.css';

const constraints = [
  {
    id: 'expertise',
    label: 'Team Expertise',
    options: [
      { value: 'beginner', label: 'Beginner' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'expert', label: 'Expert' }
    ]
  },
  {
    id: 'scale',
    label: 'Scale Expectation',
    options: [
      { value: 'small', label: 'Small' },
      { value: 'medium', label: 'Medium' },
      { value: 'large', label: 'Large' }
    ]
  },
  {
    id: 'timeToMarket',
    label: 'Time-to-Market',
    options: [
      { value: 'fast', label: 'Fast' },
      { value: 'balanced', label: 'Balanced' }
    ]
  },
  {
    id: 'riskTolerance',
    label: 'Risk Tolerance',
    options: [
      { value: 'low', label: 'Low' },
      { value: 'medium', label: 'Medium' },
      { value: 'high', label: 'High' }
    ]
  }
];

export default function ConstraintSelector({ values, onChange, disabled }) {
  const handleSelect = (constraintId, value) => {
    if (disabled) return;
    onChange({ ...values, [constraintId]: value });
  };

  return (
    <div className={styles.constraintGrid}>
      {constraints.map((constraint) => (
        <div key={constraint.id} className={styles.constraintGroup}>
          <span className={styles.constraintLabel}>{constraint.label}</span>
          <div className={styles.segmentedControl}>
            {constraint.options.map((option) => {
              const isSelected = values[constraint.id] === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  className={`${styles.segmentButton} ${isSelected ? styles.segmentButtonActive : ''}`}
                  onClick={() => handleSelect(constraint.id, option.value)}
                  disabled={disabled}
                  aria-pressed={isSelected}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
