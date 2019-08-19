import { gameProcess, getRandomInt } from '../core';

const gameDescription = 'What number is missing in the progression?';
const progLength = 10;

const makeProgression = (plength, pseed, startNumber) => {
  const iter = (array) => {
    if (array.length === plength) {
      return array;
    }
    if (array.length === 0) {
      return iter([startNumber]);
    }
    return iter(array.concat(array[array.length - 1] + pseed));
  };
  return iter([]);
};

const generateData = () => {
  const progSeed = getRandomInt(1);
  const startNumber = getRandomInt();
  const progression = makeProgression(progLength, progSeed, startNumber);
  const numberPos = getRandomInt(0, progLength - 1);
  const answer = progression[numberPos];
  const question = progression.map(val => ((val === answer) ? '..' : val)).join(' ');
  return [question, answer.toString()];
};

export default () => gameProcess(generateData, gameDescription);
