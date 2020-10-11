import Link from 'next/link';
import styles from './styles.module.css';
import { backgroundColors } from 'demo/pages/index';

const InitialStateGrid = () => {
  return (
    <div className={styles.postCardGridWrapper}>
      <div className={styles.postCardGrid}>
        {Object.entries(backgroundColors).map(([id, color], index) => (
          <Link key={index} href={`/?state=${id}`}>
            <a className={styles.postCard} style={{ backgroundColor: color }}>
              Initial State: {id}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InitialStateGrid;
