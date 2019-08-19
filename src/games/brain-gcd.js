import { gameProcess, getRandomInt } from '../core';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (val1, val2) => ((val2 === 0) ? val1 : getGcd(val2, val1 % val2));

const generateData = () => {
  const randomVal1 = getRandomInt();
  const randomVal2 = getRandomInt();
  const question = `${randomVal1} ${randomVal2}`;
  const answer = getGcd(randomVal1, randomVal2).toString();
  return [question, answer];
};

export default () => gameProcess(generateData, gameDescription);
