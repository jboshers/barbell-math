const calculate = (halfWeight:number, plates:[]) => {
  let platesNeeded:any = [];
  let remainingWeight = 0;
  [...plates].reduce((acc:any, plate:any) => {
    const sanPlate = parseFloat(plate);
    const math = acc / sanPlate;
    if (Math.floor(math) >= 1) {
      platesNeeded = [...platesNeeded, Array.from(Array(Math.floor(math)).keys(), () => plate)];
    }
    remainingWeight = acc - (Math.floor(math) * sanPlate);
    return remainingWeight;
  }, halfWeight);
  return { platesNeeded: platesNeeded.flat(), remainder: remainingWeight };
};

const calculatePlatesNeeded = (weight:number, plates:[], bar:number):any => {
  const smallestPlate = parseFloat(plates[plates.length - 1]);
  const splitWeight = (weight - bar) / 2;

  if (weight > (bar + (smallestPlate * 2))) {
    const { platesNeeded, remainder } = calculate(splitWeight, plates);
    return remainder === undefined || remainder !== 0 ? null : platesNeeded;
  }
  return null;
};

export default calculatePlatesNeeded;
