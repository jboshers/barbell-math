export const WORKOUT_MOVEMENTS = [
  ['squat', 'bench', 'row'],
  ['squat', 'press', 'deadlift'],
  ['squat', 'bench', 'row'],
];

export const SCHEME = [
  [5, 5, 5, 5, 5],
  [5, 5, 5, 5],
  [5, 5, 5, 5, 3, 8],
];

export const Sets = (length: number, weights:number[]):number[] => {
  const first = [
    weights[0],
    weights[1],
    weights[2],
    weights[3],
    weights[4],
  ];

  const second = [
    weights[0],
    weights[1],
    weights[2],
    weights[2],
  ];

  const third = [
    weights[0],
    weights[1],
    weights[2],
    weights[3],
    weights[5],
    weights[2],
  ];

  if (length === second.length) {
    return second;
  }

  if (length === third.length) {
    return third;
  }

  return first;
};
