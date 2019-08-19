import { gameProcess, getRandomInt } from '../core';

const gameDescription = 'Answer "yes" if number even otherwise answer "no"';

const isEven = num => (num % 2 === 0);

const generateData = () => {
  const question = getRandomInt();
  const answer = (isEven(question)) ? 'yes' : 'no';
  return [question.toString(), answer];
};

export default () => gameProcess(generateData, gameDescription);
