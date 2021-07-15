import { NextSeo } from 'next-seo';
import { useReducer } from 'react';
import Layout from '../../components/Layout';
import PlateDisplay from '../../components/PlateDisplay';
import calculatePlatesNeeded from '../../lib/calculatePlatesNeeded';
import styles from '../../styles/pages/calculator.module.css';
import { Page } from '../../types/madcow';

type State = {
  plates: number[],
  platesSelected: {
    [index: string]: boolean
  },
  bars: number[],
  barSelected: number,
  weight: number
}

type Action =
  | {type: 'CONFIGUREPLATES', label:string, value: boolean}
  | {type: 'CONFIGUREBAR', value: number}
  | {type: 'CONFIGUREWEIGHT', value: number}

// eslint-disable-next-line consistent-return
const reducer = (state:State, action:Action) => {
  switch (action.type) {
  case 'CONFIGUREPLATES':
    return {
      ...state,
      platesSelected: { ...state.platesSelected, [action.label]: action.value },
    };
  case 'CONFIGUREBAR':
    return {
      ...state,
      barSelected: action.value,
    };
  case 'CONFIGUREWEIGHT':
    return {
      ...state,
      weight: action.value,
    };
  default:
    throw new Error('Dis Bad');
  }
};

const initialState = {
  plates: [
    100,
    65,
    55,
    45,
    35,
    25,
    15,
    10,
    5,
    2.5,
  ],
  platesSelected: {
    100: false,
    65: false,
    55: false,
    45: true,
    35: true,
    25: true,
    15: true,
    10: true,
    5: true,
    2.5: true,
  },
  bars: [
    35,
    45,
  ],
  barSelected: 45,
  weight: 0,
};

const Index = ({ title = 'Plate Calculator' }:Page):any => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const platesToBeUsed:any = Object.keys(state.platesSelected).filter(
    (p) => { if (state.platesSelected[p]) { return parseFloat(p); } return null; },
  ).sort((a:any, b:any) => b - a);

  const handlePlateToggle = ({ target }:any) => {
    dispatch({ type: 'CONFIGUREPLATES', label: target.name, value: !state.platesSelected[target.name] });
  };

  const handleBarToggle = ({ target }:any) => {
    dispatch({ type: 'CONFIGUREBAR', value: parseInt(target.value, 10) });
  };

  const handleTextChange = ({ target }:any) => {
    dispatch({ type: 'CONFIGUREWEIGHT', value: parseInt(target.value, 10) });
  };

  const handleKilos = () => {
    // eslint-disable-next-line no-alert
    alert(
      "Fuck kilos! My Papaw fought in the war. I ain't doing none of that commie math.",
    );
  };

  return (
    <Layout title="Plate Calculator">
      <NextSeo
        title={title}
      />
      <div className={styles.base}>
        <div className="flex--inline">
          <button type="button">LB</button>
          <button type="button" onClick={handleKilos}>KG</button>
        </div>
        <h3 className={styles.heading}>Available Plates</h3>
        <div className={styles.grid}>
          {state.plates.map((plate: any) => (
            <>
              <label className={styles.control} htmlFor={plate}>
                <input
                  type="checkbox"
                  onChange={handlePlateToggle}
                  name={plate}
                  checked={state.platesSelected[plate]}
                />
                <span>{plate}</span>
              </label>
            </>
          ))}
        </div>
        <hr />
        <h3 className={styles.heading}>Bar Weight</h3>
        <div className={styles.grid}>
          {state.bars.map((bar: any) => (
            <>
              <label className={styles.control} htmlFor={bar}>
                <input
                  type="radio"
                  onChange={handleBarToggle}
                  name="bar"
                  value={bar}
                  checked={state.barSelected === parseInt(bar, 10)}
                />
                <span>{bar}</span>
              </label>
            </>
          ))}
        </div>
        <hr />
        <label htmlFor="weight">
          <input pattern="[0-9]*" name="weight" type="number" min="0" placeholder="Weight" value={state.weight} onChange={handleTextChange} />
        </label>
        <hr />
        <h3 className={styles.heading}>Plates</h3>
        <PlateDisplay
          plates={calculatePlatesNeeded(state.weight, platesToBeUsed, state.barSelected)}
        />
      </div>
    </Layout>
  );
};

export default Index;
