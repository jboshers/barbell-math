import {
  eachDayOfInterval, addWeeks, format, startOfWeek, isAfter,
} from 'date-fns';
import { ScheduleDay } from '../../types/madcow';

const generateMadCowSchedule = (
  startDate: string,
  duration: number,
  daysSelected: (number | '')[],
):ScheduleDay[] => {
  const startDateObj = startOfWeek(new Date(startDate).setUTCHours(12, 0, 0, 0));
  const endDateObj = new Date(addWeeks(startDateObj, duration));
  const daysOfProgram = eachDayOfInterval(
    { start: startDateObj, end: endDateObj },
  );
  let count = 0;

  return daysOfProgram.map((day) => {
    const date = format(day, 'MM-dd-yyyy');
    if (
      daysSelected.includes(day.getDay())
      && isAfter(day, new Date(startDate))
    ) {
      count += 1;
      // eslint-disable-next-line no-return-assign
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
