import { Movement, ScheduleDay } from '../../types/madcow';
import { SCHEME, WORKOUT_MOVEMENTS, Sets } from './constants';

// This return is staying as 'any' because I can't figure it out.

const generateWorkout = (
  scheduledDays: ScheduleDay[],
  movements: Movement[],
):any => {
  let count = 0;
  const workouts = scheduledDays.map((day) => {
    if (day.workoutId !== null) {
      const index = day.workoutId % 3;
      // eslint-disable-next-line no-unused-expressions
      index === 0 && (count += 1);
      const curatedMovements = WORKOUT_MOVEMENTS[index].map((movement) => {
        const currentMovement = movements.find((m) => m.label === movement);
        const weights = currentMovement?.progression[count - 1] || [0, 0, 0, 0, 0, 0];
        return {
          name: movement,
          reps: SCHEME[index],
          weights: Sets(SCHEME[index].length, weights),
        };
      });
      return {
        id: day.workoutId,
        week: count,
        day: index + 1,
        date: day.date,
        completed: false,
        movements: curatedMovements,
      };
    }
    return null;
  });
  return workouts.filter((w) => w !== null);
};

export default generateWorkout;
