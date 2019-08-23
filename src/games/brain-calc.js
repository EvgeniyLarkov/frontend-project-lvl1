import processGame from '../core';
import getRandomInt from '../utils';

const gameDescription = 'What is the result of the expression?';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const generateData = () => {
  const [sign, operation] = operations[getRandomInt(0, operations.length - 1)];
  const a = getRandomInt();
  const b = getRandomInt();
  const question = `${a} ${sign} ${b}`;
  const answer = operation(a, b).toString();
  return [question, answer];
};

export default () => processGame(generateData, gameDescription);
