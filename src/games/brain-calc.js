import { gameProcess, getRandomInt } from '../core';

const gameDescription = 'What is the result of the expression?';

const mathSigns = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const generateData = () => {
  const [sign, operation] = mathSigns[getRandomInt(0, mathSigns.length - 1)];
  const randomVal1 = getRandomInt();
  const randomVal2 = getRandomInt();
  const question = `${randomVal1} ${sign} ${randomVal2}`;
  const answer = operation(randomVal1, randomVal2).toString();
  return [question, answer];
};

export default () => gameProcess(generateData, gameDescription);
