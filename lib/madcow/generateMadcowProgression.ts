import { arrayFromNumber, intervalToPercentage } from '../utils';

const deriveTestWeight = (
  week:number,
  weight:number,
  plate:number,
) => Math.round((weight * (1.025 ** week)) / (2 * plate)) * 2 * plate;

const generateWeightArray = (
  week:number,
  interval:number,
  weight:number,
  plate:number,
  startingWeight:number,
) => {
  const testWeight = deriveTestWeight(week + 1, startingWeight, plate);
  // Build array of weight values
  // For MadCow we need five weights ending in the working weight
  // Then we add in the test weight for progression
  // eslint-disable-next-line max-len
  return [...arrayFromNumber(5).map((_t, i, ra) => Math.round((weight * (1 - interval * (ra.length - (i + 1)))) / (2 * plate)) * 2 * plate), testWeight];
};

const generateMadCowProgression = (
  duration: number,
  interval: number,
  plate: number,
  weight: number,
):number[][] => {
  const weeks = arrayFromNumber(duration);
  const difficulty = intervalToPercentage(interval);
  return weeks.map((week) => {
    const modifiedWeight = week === 0 ? weight : deriveTestWeight(week, weight, plate);
    return generateWeightArray(week, difficulty, modifiedWeight, plate, weight);
  });
};

export default generateMadCowProgression;
