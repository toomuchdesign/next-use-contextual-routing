import styles from './Grid.module.css';

export default function Grid({ small, children }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={[styles.grid, small ? styles.grid__small : null].join(' ')}
      >
        {children}
      </div>
    </div>
  );
}
