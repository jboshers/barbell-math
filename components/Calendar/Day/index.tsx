import { useContext } from 'react';
import { MadCowContext } from '../../../contexts/madcow/Provider';
import { showCurrentWorkout } from '../../../contexts/madcow/Reducer';
import styles from './index.module.css';

interface Day {
  date: Date,
  workoutId?: number
}

const Index = ({
  date,
  workoutId,
}:Day):JSX.Element => {
  const { dispatch }:any = useContext(MadCowContext);
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const isWorkDay = workoutId !== null;
  return (
    <div className={styles.base}>
      <div className={styles.month}>{month}</div>
      <div className={styles.day}>{day}</div>
      {isWorkDay && (
        <button
          type="button"
          className={styles.button}
          value={workoutId}
          onClick={(e) => {
            dispatch(showCurrentWorkout(parseInt(e.currentTarget.value, 10)));
          }}
        >
          Details
        </button>
      )}
    </div>
  );
};

export default Index;
