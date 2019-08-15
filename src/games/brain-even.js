import { getRandomInt } from '../core';

const rule = 'Answer "yes" if number even otherwise answer "no"';

const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');

const generateData = () => {
  const randomVal = getRandomInt();
  return [randomVal.toString(), isEven(randomVal)];
};

export { generateData, rule };
