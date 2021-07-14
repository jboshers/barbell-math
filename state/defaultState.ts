const MadcowDefaultState = {
  days: {
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  },
  movements: [
    {
      id: 0,
      label: 'squat',
      weight: 50,
      oneRepMax: 0,
      fiveRepMax: 0,
      reps: 1,
      work: 0,
      progression: [],
    },
    {
      id: 1,
      label: 'bench',
      weight: 50,
      oneRepMax: 0,
      fiveRepMax: 0,
      reps: 1,
      work: 0,
      progression: [],
    },
    {
      id: 2,
      label: 'deadlift',
      weight: 50,
      oneRepMax: 0,
      fiveRepMax: 0,
      reps: 1,
      work: 0,
      progression: [],
    },
    {
      id: 3,
      label: 'row',
      weight: 50,
      oneRepMax: 0,
      fiveRepMax: 0,
      reps: 1,
      work: 0,
      progression: [],
    },
    {
      id: 4,
      label: 'press',
      weight: 50,
      oneRepMax: 0,
      fiveRepMax: 0,
      reps: 1,
      work: 0,
      progression: [],
    },
  ],
  settings: {
    duration: 12,
    plate: 2.5,
    interval: 12.5,
    startDate: undefined,
  },
  scheduledDays: [],
  workouts: [],
  completedWorkouts: [],
  currentWorkout: null,
};

export default MadcowDefaultState;
