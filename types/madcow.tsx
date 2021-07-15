export interface Page {
  title: string
}

export type Movement = {
  id: number,
  label: string,
  oneRepMax: number,
  fiveRepMax: number,
  reps: number,
  work: number,
  weight: number,
  progression: number[][]
}

export type Settings = {
  duration: number,
  plate: number,
  interval: number,
  startDate: string | undefined
}

export interface Workout {
  id: number,
  date: string,
  day: number,
  week: number,
  completed: boolean,
  movements: {
    name: string,
    reps: number[],
    weights: number[],
  }[],
}

export interface ScheduleDay {
  date: string,
  rest: boolean,
  workoutId: number | null,
}

export type State = {
  days: {
    [index: string]: boolean
  },
  movements: Movement[],
  settings: Settings,
  workouts: Workout[],
  scheduledDays: ScheduleDay[],
  currentWorkout: number | null,
}

export type Action =
  | {type: 'CONFIG_DAYS', day: string, value: boolean}
  | {type: 'UPDATE_MOVEMENT', payload: Movement}
  | {type: 'UPDATE_DURATION', duration: number }
  | {type: 'UPDATE_START_DATE', startDate: string }
  | {type: 'UPDATE_SMALL_PLATE', plate: number }
  | {type: 'ADD_SCHEDULED_DAYS', payload: ScheduleDay[]}
  | {type: 'UPDATE_INTERVAL', interval: number }
  | {type: 'ADD_WORKOUTS', payload: Workout[]}
  | {type: 'SHOW_CURRENT_WORKOUT', payload: number | null}
  | {type: 'COMPLETE_CURRENT_WORKOUT', payload: number}

export type Dispatch = (action: Action) => void

export interface mcCtx {
  state?: State
  dispatch?: Dispatch
}
