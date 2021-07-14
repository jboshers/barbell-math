import { useContext } from 'react';
import styles from './index.module.css';
import { Movement } from '../../../types/madcow';
import generateMadcowProgression from '../../../lib/madcow/generateMadcowProgression';
import { MadCowContext } from '../../../contexts/madcow/Provider';
import { UPDATE_MOVEMENT } from '../../../contexts/madcow/Reducer';

type Props = {
  movement: Movement,
}

const Row = ({ movement }:Props):JSX.Element => {
  const { state, dispatch }:any = useContext(MadCowContext);
  const { settings } = state;
  const { id, label } = movement;
  let {
    weight,
    reps,
  } = movement;

  const {
    duration,
    interval,
    plate,
  } = settings;

  const calculateMaxes = () => {
    const oneRepMax = Math.round(weight / (1.0278 - (0.0278 * reps)));
    const fiveRepMax = Math.round(oneRepMax * (1.0278 - (0.0278 * 5)));
    const work = Math.round((fiveRepMax * ((1 / 1.025) ** (3))) / (2 * 2.5)) * 2 * 2.5;
    const progression = generateMadcowProgression(duration, interval, plate, work);
    const payload = {
      id,
      label,
      weight,
      oneRepMax,
      fiveRepMax,
      reps,
      work,
      progression,
    };
    dispatch(UPDATE_MOVEMENT(payload));
  };

  return (
    <>
      <div className={styles.inputRow}>
        <label htmlFor="weight">
          <strong className={styles.label}>{label}</strong>
          <input
            type="number"
            placeholder="Test Weight"
            min="1"
            name="weight"
            defaultValue={weight}
            pattern="[0-9]*"
            // eslint-disable-next-line no-return-assign
            onChange={(e) => {
              weight = parseInt(e.target.value, 10);
              calculateMaxes();
            }}
          />
        </label>
        <label htmlFor="reps">
          <strong className={styles.label}>Reps</strong>
          <input
            type="number"
            placeholder="# Reps"
            min="1"
            max="10"
            name="reps"
            pattern="[0-9]*"
            defaultValue={reps}
            // eslint-disable-next-line no-return-assign
            onChange={(e) => {
              reps = parseInt(e.target.value, 10);
              calculateMaxes();
            }}
          />
        </label>
        <div>
          <strong className={styles.label}>1RM</strong>
          <input type="number" value={movement.oneRepMax} disabled />
        </div>
        <div>
          <strong className={styles.label}>5RM</strong>
          <input type="number" value={movement.fiveRepMax} disabled />
        </div>
        <div>
          <strong className={styles.label}>Work</strong>
          <input type="number" value={movement.work} disabled />
        </div>
      </div>
    </>
  );
};

export default Row;
