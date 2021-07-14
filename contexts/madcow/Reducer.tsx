import MadcowDefaultState from '../../state/defaultState';
import {
  State, Action, Movement, Workout, ScheduleDay,
} from '../../types/madcow';

export const initializer = (initialValue = MadcowDefaultState):State => {
  if (typeof window !== 'undefined') {
    const lStor:any = localStorage.getItem('madCowProgram');
    return JSON.parse(lStor) || initialValue;
  }
  return initialValue;
};

export const madcowReducer = (state:State, action: Action):State => {
  switch (action.type) {
  case 'CONFIG_DAYS':
    return {
      ...state,
      days: { ...state.days, [action.day]: !state.days[action.day] },
    };

  case 'UPDATE_MOVEMENT':
    // eslint-disable-next-line no-param-reassign
    state.movements[action.payload.id] = {
      ...state.movements[action.payload.id],
      weight: action.payload.weight,
      oneRepMax: action.payload.oneRepMax,
      fiveRepMax: action.payload.fiveRepMax,
      reps: action.payload.reps,
      work: action.payload.work,
      progression: action.payload.progression,
    };
    return {
      ...state,
    };

  case 'UPDATE_DURATION':
    return {
      ...state,
      settings: {
        ...state.settings,
        duration: action.duration,
      },
    };

  case 'UPDATE_INTERVAL':
    return {
      ...state,
      settings: {
        ...state.settings,
        interval: action.interval,
      },
    };

  case 'UPDATE_START_DATE':
    return {
      ...state,
      settings: {
        ...state.settings,
        startDate: action.startDate,
      },
    };

  case 'UPDATE_SMALL_PLATE':
    return {
      ...state,
      settings: {
        ...state.settings,
        plate: action.plate,
      },
    };

  case 'ADD_SCHEDULED_DAYS':
    return {
      ...state,
      scheduledDays: action.payload,
    };

  case 'ADD_WORKOUTS':
    return {
      ...state,
      workouts: action.payload.map((workout) => ({
        ...workout,
        completed: state?.workouts[workout.id]?.completed,
      })),
    };

  case 'SHOW_CURRENT_WORKOUT':
    return {
      ...state,
      currentWorkout: action.payload,
    };

  case 'COMPLETE_CURRENT_WORKOUT':
    return {
      ...state,
      workouts:
        state.workouts.map((workout) => {
          if (workout.id === action.payload) {
            return {
              ...workout,
              completed: true,
            };
          }
          return workout;
        }),
    };

  default:
    return state;
  }
};

export const addToDaysSelected = (day: string):any => ({
  type: 'CONFIG_DAYS',
  day,
});

export const UPDATE_MOVEMENT = (payload: Movement):any => ({
  type: 'UPDATE_MOVEMENT',
  payload,
});

export const UPDATE_DURATION = (duration: number):any => ({
  type: 'UPDATE_DURATION',
  duration,
});

export const UPDATE_START_DATE = (startDate: string):any => ({
  type: 'UPDATE_START_DATE',
  startDate,
});

export const UPDATE_SMALL_PLATE = (plate: number):any => ({
  type: 'UPDATE_SMALL_PLATE',
  plate,
});

export const UPDATE_INTERVAL = (interval: number):any => ({
  type: 'UPDATE_INTERVAL',
  interval,
});

export const ADD_SCHEDULED_DAYS = (payload: ScheduleDay[]):any => ({
  type: 'ADD_SCHEDULED_DAYS',
  payload,
});

export const ADD_WORKOUTS = (payload: Workout[]):any => ({
  type: 'ADD_WORKOUTS',
  payload,
});

export const showCurrentWorkout = (payload: number | null):any => ({
  type: 'SHOW_CURRENT_WORKOUT',
  payload,
});

export const completeWorkout = (payload: number):any => ({
  type: 'COMPLETE_CURRENT_WORKOUT',
  payload,
});
