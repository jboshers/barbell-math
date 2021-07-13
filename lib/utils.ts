export const arrayFromNumber = (x:number):number[] => Array.from(Array(x).keys());

export const intervalToPercentage = (interval:number):number => interval / 100;

// eslint-disable-next-line max-len
export const delay = (delayMs: number):Promise<void> => new Promise<void>((resolve) => setTimeout(() => resolve(), delayMs));
