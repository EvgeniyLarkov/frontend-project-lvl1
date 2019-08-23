import processGame from '../core';
import getRandomInt from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const iter = (divider) => {
    if (number % divider === 0 && number !== 2) {
      return false;
    }
    if ((Math.sqrt(number) <= divider)) {
      return true;
    }
    return iter(divider + 1);
  };
  return iter(2);
};

const generateData = () => {
  const question = getRandomInt(2, 20);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => processGame(generateData, gameDescription);
