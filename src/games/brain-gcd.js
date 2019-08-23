import processGame from '../core';
import getRandomInt from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => ((b === 0) ? a : getGcd(b, a % b));

const generateData = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const question = `${a} ${b}`;
  const answer = getGcd(a, b).toString();
  return [question, answer];
};

export default () => processGame(generateData, gameDescription);
