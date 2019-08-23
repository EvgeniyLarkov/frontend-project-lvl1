import processGame from '../core';
import getRandomInt from '../utils';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (progressionSeed, initialTerm) => {
  const iter = (progression) => {
    if (progression.length === progressionLength) {
      return progression;
    }
    if (progression.length === 0) {
      return iter([initialTerm]);
    }
    return iter(progression.concat(progression[progression.length - 1] + progressionSeed));
  };
  return iter([]);
};

const generateData = () => {
  const progressionSeed = getRandomInt(1, 20);
  const initialTerm = getRandomInt();
  const progression = makeProgression(progressionSeed, initialTerm);
  const answerPosition = getRandomInt(0, progressionLength - 1);
  const answer = progression[answerPosition];
  const question = progression.map(value => ((value === answer) ? '..' : value)).join(' ');
  return [question, answer.toString()];
};

export default () => processGame(generateData, gameDescription);
