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
  startDate: string | null
}

export interface Workout {
  id: number,
  date: string,
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
  | {type: 'CONFIGDAYS', day: string, value: boolean}
  | {type: 'UPDATEMOVEMENT', payload: Movement}
  | {type: 'UPDATEDURATION', duration: number }
  | {type: 'UPDATESTARTDATE', startDate: string }
  | {type: 'UPDATESMALLPLATE', plate: number }
  | {type: 'ADDSCHEDULEDDAYS', payload: ScheduleDay[]}
  | {type: 'UPDATEINTERVAL', interval: number }
  | {type: 'ADDWORKOUTS', payload: Workout[]}
  | {type: 'SHOW_CURRENT_WORKOUT', payload: number | null}
  | {type: 'COMPLETE_CURRENT_WORKOUT', payload: number}

export type Dispatch = (action: Action) => void

export interface mcCtx {
  state?: State
  dispatch?: Dispatch
}
