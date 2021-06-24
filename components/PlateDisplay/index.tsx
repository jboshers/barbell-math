import styles from './index.module.css';

export interface Props {
  plates: []
}

const weightToWord = {
  100: 'hundred',
  65: 'sixtyFive',
  55: 'fiftyFive',
  45: 'fortyFive',
  35: 'thirtyFive',
  25: 'twentyFive',
  15: 'fifteen',
  10: 'ten',
  5: 'five',
  2.5: 'twoHalf',
  1.25: 'oneQuarter',
};

const errorMsg = {
  heading: 'Please select another weight.',
  description: 'Even weight distribution not possible.',
};
const Index = ({ plates }:Props):JSX.Element => (
  <>
    { plates && (
      <div className={styles.base}>
        {plates.map((w, i) => (
          <div
            key={`${w}-${i * 32}`}
            className={`${styles.plate} ${styles[weightToWord[w]]}`}
          >
            <div className={styles.label}>{w}</div>
          </div>
        ))}
      </div>
    )}
    {!plates && (
      <>
        <h3>{errorMsg.heading}</h3>
        <p>{errorMsg.description}</p>
      </>
    )}
  </>
);

export default Index;
