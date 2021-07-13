import { useContext, useEffect } from 'react';
import Modal from '../../Modal';
import styles from './index.module.css';
import { MadCowContext } from '../../../contexts/madcow/Provider';
import {
  updateDuration,
  updateSmallPlate,
  updateStartDate,
  updateInterval,
  addScheduledDays,
  addWorkouts,
} from '../../../contexts/madcow/Reducer';
import Form from '../Form';
import DaySelector from '../DaySelector';
import generateMadCowSchedule from '../../../lib/madcow/generateMadCowSchedule';
import generateWorkout from '../../../lib/madcow/generateWorkout';

const Index = ():JSX.Element => {
  const { state, dispatch }:any = useContext(MadCowContext);
  const {
    duration, plate, interval, startDate,
  } = state.settings;
  const { days, movements } = state;
  const daysSelected = Object.keys(days).map((day, i) => (state.days[day] ? i : '')).filter(String);

  useEffect(() => {
    const programDays = generateMadCowSchedule(startDate, duration, daysSelected);
    dispatch(addScheduledDays(programDays));
  }, [
    days,
    startDate,
    movements[0].progression,
    movements[1].progression,
    movements[2].progression,
    movements[3].progression,
    movements[4].progression,
  ]);

  useEffect(() => {
    const workouts = generateWorkout(state.scheduledDays, movements);
    dispatch(addWorkouts(workouts));
  }, [
    state.scheduledDays,
    movements[0].progression,
    movements[1].progression,
    movements[2].progression,
    movements[3].progression,
    movements[4].progression,
  ]);
  return (
    <>
      <Modal title="Calendar Settings">
        <DaySelector />
        <div className={styles.grid}>
          <div>
            <label htmlFor="startDate">
              <strong className={styles.label}>Start Date</strong>
              <input
                type="date"
                name="startDate"
                defaultValue={startDate}
                data-tip="Any day of the first week."
                onChange={(e) => {
                  dispatch(updateStartDate(e.target.value));
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="duration">
              <strong className={styles.label}>Duration</strong>
              <input
                type="number"
                name="duration"
                min="1"
                max="18"
                step="1"
                defaultValue={duration}
                data-tip="Number of programmed weeks."
                onChange={(e) => {
                  dispatch(updateDuration(parseInt(e.target.value, 10)));
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="plate">
              <strong className={styles.label}>Plate</strong>
              <select
                data-tip="Smallest weight available in the gym."
                defaultValue={plate}
                // eslint-disable-next-line no-return-assign
                onChange={(e) => {
                  dispatch(updateSmallPlate(parseFloat(e.target.value)));
                }}
              >
                <option>10</option>
                <option>5</option>
                <option>2.5</option>
                <option>1.25</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="interval">
              <strong className={styles.label}>Interval</strong>
              <input
                type="number"
                name="interval"
                step="0.25"
                min="12"
                max="18"
                defaultValue={interval}
                data-tip="Percentage of difficulty week to week. Best not to change."
                onChange={(e) => {
                  dispatch(updateInterval(parseFloat(e.target.value)));
                }}
              />
            </label>
          </div>
        </div>
        <Form />
      </Modal>
    </>
  );
};

export default Index;
