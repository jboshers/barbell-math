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
  case 'CONFIGDAYS':
    return {
      ...state,
      days: { ...state.days, [action.day]: !state.days[action.day] },
    };

  case 'UPDATEMOVEMENT':
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

  case 'UPDATEDURATION':
    return {
      ...state,
      settings: {
        ...state.settings,
        duration: action.duration,
      },
    };

  case 'UPDATEINTERVAL':
    return {
      ...state,
      settings: {
        ...state.settings,
        interval: action.interval,
      },
    };

  case 'UPDATESTARTDATE':
    return {
      ...state,
      settings: {
        ...state.settings,
        startDate: action.startDate,
      },
    };

  case 'UPDATESMALLPLATE':
    return {
      ...state,
      settings: {
        ...state.settings,
        plate: action.plate,
      },
    };

  case 'ADDSCHEDULEDDAYS':
    return {
      ...state,
      scheduledDays: action.payload,
    };

  case 'ADDWORKOUTS':
    return {
      ...state,
      workouts: action.payload,
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
  type: 'CONFIGDAYS',
  day,
});

export const updateMovement = (payload: Movement):any => ({
  type: 'UPDATEMOVEMENT',
  payload,
});

export const updateDuration = (duration: number):any => ({
  type: 'UPDATEDURATION',
  duration,
});

export const updateStartDate = (startDate: string):any => ({
  type: 'UPDATESTARTDATE',
  startDate,
});

export const updateSmallPlate = (plate: number):any => ({
  type: 'UPDATESMALLPLATE',
  plate,
});

export const updateInterval = (interval: number):any => ({
  type: 'UPDATEINTERVAL',
  interval,
});

export const addScheduledDays = (payload: ScheduleDay[]):any => ({
  type: 'ADDSCHEDULEDDAYS',
  payload,
});

export const addWorkouts = (payload: Workout[]):any => ({
  type: 'ADDWORKOUTS',
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
