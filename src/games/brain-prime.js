import { gameProcess, getRandomInt } from '../core';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const iter = (divider) => {
    if (Math.sqrt(num) <= divider) {
      return true;
    }
    if (num % divider === 0) {
      return false;
    }
    return iter(divider + 1);
  };
  return iter(2);
};

const generateData = () => {
  const randomVal = getRandomInt(2);
  const question = randomVal;
  const answer = (isPrime(randomVal)) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameProcess(generateData, gameDescription);
