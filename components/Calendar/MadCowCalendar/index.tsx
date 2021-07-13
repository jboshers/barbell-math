import { useContext } from 'react';
import { MadCowContext } from '../../../contexts/madcow/Provider';
import { Workout } from '../../../types/madcow';
import Debugger from '../../Debugger';
import Day from '../Day';
import WorkoutCMP from '../Workout';

function determineId(completedWorkouts: Workout[], currentWorkout = null) {
  let id;
  // This allows for any workout to be selected.
  if (currentWorkout !== null) {
    id = currentWorkout;
  } else if (completedWorkouts.length > 0) {
    id = completedWorkouts[completedWorkouts.length - 1].id;
  } else {
    id = 0;
  }
  return id;
}

const getNextWorkout = () => {
  const { state }:any = useContext(MadCowContext);
  const { workouts, completedWorkouts, currentWorkout } = state;
  const id = determineId(completedWorkouts, currentWorkout);
  return workouts?.find((workout:any) => workout.id === id);
};

const Index = ():JSX.Element => {
  const { state }:any = useContext(MadCowContext);
  const { scheduledDays } = state;
  const selectedWorkout = getNextWorkout();
  return (
    <>
      <WorkoutCMP selectedWorkout={selectedWorkout} />
      { scheduledDays.length !== 0 && (
        <div className="grid__day">
          { scheduledDays.map((day: any) => (
            <Day
              key={day.date}
              date={new Date(day.date)}
              workoutId={day.workoutId}
            />
          ))}
        </div>
      )}
      <Debugger code={JSON.stringify(state.workouts, null, '\t')} />
    </>
  );
};

export default Index;
