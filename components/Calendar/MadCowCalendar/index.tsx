import { useContext } from 'react';
import { MadCowContext } from '../../../contexts/madcow/Provider';
import Day from '../Day';
import Workout from '../Workout';

function determineId(completedWorkouts: any, currentWorkout = null) {
  let id;
  const nextWorkout = completedWorkouts.findIndex((workout:any) => workout.completed === false);
  // This allows for any workout to be selected.
  if (currentWorkout !== null) {
    id = currentWorkout;
  } else if (nextWorkout > 0) {
    id = nextWorkout;
  } else {
    id = 0;
  }
  return id;
}

const getNextWorkout = () => {
  const { state }:any = useContext(MadCowContext);
  const { workouts, currentWorkout } = state;
  const id = determineId(workouts, currentWorkout);
  return workouts?.find((workout:any) => workout.id === id) || null;
};

const Index = ():JSX.Element => {
  const { state }:any = useContext(MadCowContext);
  const { scheduledDays, workouts } = state;
  const selectedWorkout = getNextWorkout();
  return (
    <>
      <Workout selectedWorkout={selectedWorkout} />
      { workouts.length !== 0 && (
        <div className="grid__day">
          { scheduledDays.map((day: any) => (
            <Day
              key={day.date}
              date={new Date(day.date)}
              restDay={day.rest}
              workoutId={day.workoutId}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Index;
