/* eslint-disable default-case */
import { useReducer } from 'react';
import PlateDisplay from '../../components/PlateDisplay';
import calculatePlatesNeeded from '../../lib/calculatePlatesNeeded';

// eslint-disable-next-line consistent-return
const reducer = (state:any, action:any) => {
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

const Index = ():any => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const platesToBeUsed = Object.keys(state.platesSelected).filter(
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
    <>
      <div className="flex--inline">
        <button type="button">lbs</button>
        <button type="button" onClick={handleKilos}>kilos</button>
      </div>
      <h5>Available Plates</h5>
      <div className="grid--simple">
        {state.plates.map((plate: any) => (
          <span key={plate}>
            <label htmlFor={plate}>
              <input
                type="checkbox"
                onChange={handlePlateToggle}
                name={plate}
                checked={state.platesSelected[plate]}
              />
              {plate}
            </label>
          </span>
        ))}
      </div>
      <hr />
      <h5>Bar Weight</h5>
      <div className="grid--simple">
        {state.bars.map((bar: any) => (
          <div key={bar}>
            <label htmlFor={bar}>
              <input
                type="radio"
                onChange={handleBarToggle}
                name="bar"
                value={bar}
                checked={parseInt(state.barSelected, 10) === parseInt(bar, 10)}
              />
              {bar}
            </label>
          </div>
        ))}
      </div>
      <hr />
      <label htmlFor="weight">
        <input name="weight" type="number" min="0" placeholder="Weight" value={state.weight} onChange={handleTextChange} />
      </label>
      <hr />
      <h5>Plates</h5>
      <PlateDisplay
        plates={calculatePlatesNeeded(state.weight, platesToBeUsed, state.barSelected)}
      />
    </>
  );
};

export default Index;
