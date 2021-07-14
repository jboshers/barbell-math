import styles from './index.module.css';

interface Props {
  plates: string[]|null
}

type basicObj = {
  [index: string]: string;
}

const weightToWord:basicObj = {
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
        {plates.map((w:string, i:number) => (
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
      <div className={styles.error}>
        <h3>{errorMsg.heading}</h3>
        <p>{errorMsg.description}</p>
      </div>
    )}
  </>
);

export default Index;
