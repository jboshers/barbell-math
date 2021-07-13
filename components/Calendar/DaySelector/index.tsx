import { useContext } from 'react';
import styles from './index.module.css';
import { MadCowContext } from '../../../contexts/madcow/Provider';
import { addToDaysSelected } from '../../../contexts/madcow/Reducer';
import generateMadCowSchedule from '../../../lib/madcow/generateMadCowSchedule';

const Index = ():JSX.Element => {
  const { state, dispatch }:any = useContext(MadCowContext);
  const days = Object.keys(state.days);
  const daysSelected = days.filter((day) => state.days[day]);
  const daysSelectedByIndex = days.map((day, i) => (state.days[day] ? i : '')).filter(String);

  const handleDaySelection = ({ target }:any) => {
    // Only selects three days and allows for unselected already selected days.
    if (daysSelected.length <= 2 || daysSelected.includes(target.name)) {
      dispatch(addToDaysSelected(target.name));
    }
  };

  return (
    <>
      <h2 className={styles.heading}>Select 3 Cycle Days</h2>
      <span className={styles.helpText}>Ideally there is a day between workouts.</span>
      <div className={styles.grid}>
        {days.map((day: any) => {
          const active = daysSelected.includes(day);
          return (
            <div className={styles.day} key={day}>
              <input
                type="checkbox"
                name={day}
                checked={active}
              />
              <button type="button" className={styles.button} name={day} onClick={handleDaySelection}>
                <div className={styles.name}>
                  {day.substring(0, 3)}
                </div>
                <div className={styles.typeOfDay}>
                  {active ? 'Work' : 'Rest'}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
