import { useContext } from 'react';
import {
  startOfWeek, addWeeks, eachDayOfInterval, addDays,
} from 'date-fns';
import { MadCowContext } from '../../../contexts/madcow/Provider';
import Day from '../Day';
import styles from './index.module.css';

interface Week {
  id: number,
  trainingDays: (number | '')[]
}

function daysOfTheWeek(startDate:string, offset:number):Date[] | null {
  if (startDate != null) {
    const date = new Date(startDate).setUTCHours(12, 0, 0, 0);
    const dateWithOffset = addWeeks(date, offset);
    const firstDOW = startOfWeek(dateWithOffset);
    const lastDOW = addDays(firstDOW, 6);
    return eachDayOfInterval({ start: firstDOW, end: lastDOW });
  }
  return null;
}

const Index = ({ id, trainingDays }:Week):JSX.Element => {
  const { state }:any = useContext(MadCowContext);
  const { startDate } = state.settings;
  const days = daysOfTheWeek(startDate, id);
  return (
    <div className={styles.base}>
      {
        days?.map((day, i) => {
          const workout = trainingDays.findIndex((d) => d === i);
          return (
            <Day
              key={day.toUTCString()}
              date={day}
              week={id}
              workout={workout}
            />
          );
        })
      }
    </div>
  );
};
export default Index;
