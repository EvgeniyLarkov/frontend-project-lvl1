import { getRandomInt } from '../core';

const rule = 'What number is missing in the progression?';

const makeProgression = (plength, pseed) => {
  const startNumber = getRandomInt();
  const iter = (array) => {
    if (array.length === plength) {
      return array;
    }
    return iter(array.concat(array[array.length - 1] + pseed));
  };
  return iter([startNumber]);
};

const generateData = () => {
  const progLength = 10;
  const progSeed = getRandomInt(1);
  const progression = makeProgression(progLength, progSeed);
  const numberPos = getRandomInt(0, progLength - 1);
  const answer = progression[numberPos];
  const question = progression.map(val => ((val === answer) ? '..' : val)).join(' ');
  return [question, answer.toString()];
};

export { generateData, rule };
