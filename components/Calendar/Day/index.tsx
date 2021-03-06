import { useContext } from 'react';
import { format } from 'date-fns';
import { MadCowContext } from '../../../contexts/madcow/Provider';
import { showCurrentWorkout } from '../../../contexts/madcow/Reducer';
import styles from './index.module.css';

interface Day {
  date: Date,
  restDay: boolean,
  workoutId?: number
}

const Index = ({
  date,
  restDay,
  workoutId,
}:Day):JSX.Element => {
  const { dispatch }:any = useContext(MadCowContext);
  const month = format(date, 'MM');
  const day = format(date, 'dd');
  const isWorkDay = !restDay;
  return (
    <div className={`${styles.base} ${restDay ? styles.restDay : ''}`}>
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
