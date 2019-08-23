import processGame from '../core';
import getRandomInt from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => number % 2 === 0;

const generateData = () => {
  const question = getRandomInt();
  const answer = (isEven(question)) ? 'yes' : 'no';
  return [question.toString(), answer];
};

export default () => processGame(generateData, gameDescription);
