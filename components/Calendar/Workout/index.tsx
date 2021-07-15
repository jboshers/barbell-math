import { format } from 'date-fns';
import { useContext } from 'react';
import { MadCowContext } from '../../../contexts/madcow/Provider';
import { completeWorkout } from '../../../contexts/madcow/Reducer';
import calculatePlatesNeeded from '../../../lib/calculatePlatesNeeded';
import { Workout } from '../../../types/madcow';
import styles from './index.module.css';

interface WorkoutMovement {
  name: string,
  reps: number[],
  weights: number[],
}
interface SelectedWorkout {
  selectedWorkout: Workout | null
}

const bar = 45;
const plates = ['45', '35', '25', '15', '10', '5', '2.5'];

// const EmptyState = ():JSX.Element => (
//   <>
//     <div className={styles.emptyState}>
//       <h2 className={styles.emptyStateHeading}>No Workouts Found.</h2>
//       <p>
//         Configure your program by clicking the settings button.
//         {' '}
//         <br />
//         Fill out the fields, and I&rsquo;ll do the rest.
//       </p>
//     </div>
//   </>
// );
function PrettyWeights({ set }: any):JSX.Element {
  const weightRA = calculatePlatesNeeded(set, plates, bar);
  // eslint-disable-next-line max-len
  const map = weightRA?.reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map());
  return (
    <div className={styles.plates}>
      {
        map === undefined ? <span>∞</span>
          : Array.from(map.entries()).map(([key, value]) => (
            <div key={key}>
              {key}
              <sup>{value > 1 ? value : null}</sup>
            </div>
          ))
      }
    </div>
  );
}

const Index = ({ selectedWorkout }:SelectedWorkout):JSX.Element => {
  const { dispatch }:any = useContext(MadCowContext);
  // if (selectedWorkout === null) {
  //   return (
  //     <EmptyState />
  //   );
  // }
  return (
    <>
      {selectedWorkout && (
        <div className={styles.base}>
          <div className={styles.header}>
            <h1 className={styles.heading}>
              {selectedWorkout.week}
              .
              {selectedWorkout.day}
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              {' '}
              //
              {' '}
              {format(new Date(selectedWorkout.date), 'MM.dd.yy')}
            </h1>
            {selectedWorkout.completed === true
              && (
                <div className={styles.completed}>
                  <div className={styles.check}>✓</div>
                  {' '}
                  <div>Completed</div>
                </div>
              )}
            {selectedWorkout.completed === false
              && (
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => {
                    dispatch(completeWorkout(selectedWorkout.id));
                  }}
                >
                  Done.
                </button>
              )}
          </div>
          { selectedWorkout?.movements?.map((m: WorkoutMovement) => (
            <div key={m.name} className={styles.movementTable}>
              <h2 className={styles.workoutHeading}>{m.name}</h2>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th>{' '}</th>
                    <th>Set</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Plates Needed</th>
                  </tr>
                  { m.weights.map((set: number, i: number) => (
                  // eslint-disable-next-line react/no-array-index-key
                    <tr key={i}>
                      <td />
                      <td>{i + 1}</td>
                      <td>{m.reps[i]}</td>
                      <td>{set}</td>
                      <td><PrettyWeights set={set} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Index;
