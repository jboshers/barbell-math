import { useContext } from 'react';
import { MadCowContext } from '../../../contexts/madcow/Provider';
import styles from './index.module.css';

type Props = {
  day: number
}

const Scheme = ({ day }:Props):JSX.Element => {
  const { state }:any = useContext(MadCowContext);
  const { workouts, scheme }:any = state;
  const reps = scheme[day];
  const movements = workouts[day];
  return (
    <div>
      { movements.map((movement: any) => (
        <div
          key={movement.id}
          className={styles.base}
        >
          <div className={styles.label}>{movement}</div>
          <div className={styles.scheme}>
            { reps.map((r:number, i:number) => (
              <div
                className="data-cell"
                // eslint-disable-next-line react/no-array-index-key
                key={`${r}-${i}`}
              >
                {r}
              </div>
            )) }
          </div>
        </div>
      )) }
    </div>
  );
};
export default Scheme;
