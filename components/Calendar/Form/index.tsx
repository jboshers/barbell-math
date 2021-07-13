import { useContext } from 'react';
import styles from './index.module.css';
import InputRow from '../InputRow';
import { MadCowContext } from '../../../contexts/madcow/Provider';
import { Movement } from '../../../types/madcow';

const handleFormSubmit = (e: any) => {
  e.preventDefault();
};

const Form = ():JSX.Element => {
  const { state }:any = useContext(MadCowContext);
  const { movements } = state;
  return (
    <div className={styles.form}>
      <h2 className={styles.heading}>Calculate Working Weight</h2>
      <span className={styles.helpText}>For each movement, input your max.</span>
      <form onSubmit={handleFormSubmit}>
        {
          movements.map(
            (movement: Movement) => (
              <InputRow
                key={movement.label}
                movement={movement}
              />
            ),
          )
        }
      </form>
    </div>
  );
};

export default Form;
