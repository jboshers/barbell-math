import {
  createContext,
  useEffect,
  useReducer,
  ReactNode,
} from 'react';
import { mcCtx } from '../../types/madcow';

import { madcowReducer, initializer } from './Reducer';

type Props = {
  children: ReactNode
}

export const MadCowContext = createContext<mcCtx | undefined>(undefined);

export const MadCowProvider = ({ children }:Props):JSX.Element => {
  const [state, dispatch] = useReducer(madcowReducer, undefined, initializer);

  useEffect(() => {
    // Allows currentWorkout to be used but not saved.
    const strippedState = { ...state, currentWorkout: null };
    localStorage.setItem('madCowProgram', JSON.stringify(strippedState));
  }, [state]);

  return (
    <MadCowContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MadCowContext.Provider>
  );
};
