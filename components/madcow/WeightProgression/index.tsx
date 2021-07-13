import { useContext } from 'react';
import { MadCowContext } from '../../../contexts/madcow/Provider';
import styles from './index.module.css';

type WeekProps = {
  day: number,
  week: number[][]
}

type ProgressionProps = {
  day: number,
}

const Week = ({ day, week }:WeekProps):JSX.Element => {
  const workout = week[day];
  return (
    <div>
      { workout.map((set:number, i:number) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`set-${day}-${i}`} className="data-cell">
          {set}
        </div>
      )) }
    </div>
  );
};

const Index = ({ day }:ProgressionProps):JSX.Element => {
  const { state }:any = useContext(MadCowContext);
  const { progressions, workouts, settings } = state;
  const workoutsByDay = workouts[day];
  // eslint-disable-next-line max-len
  const movementsInWorkout = workoutsByDay.map((workout: string[]) => progressions?.filter((mvmnt: any) => mvmnt.label === workout)).flat();
  return (
    <div className={styles.base} style={{ gridTemplateColumns: `repeat(${settings.duration}, minmax(60px, 1fr))` }}>
      { movementsInWorkout.map((workout: any) => (
        <>
          { workout?.progression?.map((week:number[][], i:number):JSX.Element => (
            // eslint-disable-next-line react/no-array-index-key
            <Week key={`week-${i}`} day={day} week={week} />
          )) }
        </>
      )) }
    </div>
  );
};

export default Index;
