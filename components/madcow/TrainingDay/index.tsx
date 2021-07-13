import { ReactNode } from 'react';
import styles from './index.module.css';

type Props = {
  label: string,
  children: ReactNode
}

const Day = ({ label, children }:Props):JSX.Element => (
  <>
    <div className={styles.day}>
      <div className={styles.label}>
        {label}
      </div>
      <div className={styles.movement}>
        {children}
      </div>
    </div>
  </>
);
export default Day;
