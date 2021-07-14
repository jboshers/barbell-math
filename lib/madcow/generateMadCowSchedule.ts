import {
  eachDayOfInterval,
  addDays,
  format,
  startOfWeek,
  isAfter,
  startOfDay,
  differenceInCalendarDays,
  isEqual,
} from 'date-fns';
import { ScheduleDay } from '../../types/madcow';

const generateMadCowSchedule = (
  startDate = format(new Date(), 'MM-dd-yyyy'),
  duration: number,
  daysSelected: (number | '')[],
):ScheduleDay[] => {
  // Date of the first workout.
  const firstWorkoutDate = startOfDay(new Date(startDate).setUTCHours(12, 0, 0, 0));
  // Date of the start of the week the first workout takes place.
  const startDateObj = startOfWeek(firstWorkoutDate);
  // Offset in days from the start of the week til the first workout.
  const offsetInDays = differenceInCalendarDays(firstWorkoutDate, startDateObj);
  //  How many days in the program.
  const programSpan = (duration * 7) + offsetInDays - 1;
  // Adjusted end date of the program. Accounts for mid-week starts.
  const endDateObj = addDays(startDateObj, programSpan);
  const daysOfProgram = eachDayOfInterval(
    { start: startDateObj, end: endDateObj },
  );
  let count = 0;
  return daysOfProgram.map((day) => {
    const isDateDuringProgram = isEqual(day, firstWorkoutDate) || isAfter(day, firstWorkoutDate);
    const date = format(day, 'MM-dd-yyyy');
    if (
      daysSelected.includes(day.getDay())
      && isDateDuringProgram
    ) {
      count += 1;
      return ({
        date,
        rest: false,
        workoutId: count - 1,
      });
    }
    return ({
      date,
      rest: true,
      workoutId: null,
    });
  });
};

export default generateMadCowSchedule;
