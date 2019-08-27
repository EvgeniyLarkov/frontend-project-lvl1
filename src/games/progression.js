import processGame from '../core';
import getRandomInt from '../utils';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (commonDifference, initialTerm, seriesLength) => {
  const counter = (progression) => {
    if (progression.length === seriesLength) {
      return progression;
    }
    if (progression.length === 0) {
      return counter([initialTerm]);
    }
    return counter(progression.concat(progression[progression.length - 1] + commonDifference));
  };
  return counter([]);
};

const generateData = () => {
  const commonDifference = getRandomInt(1, 20);
  const initialTerm = getRandomInt();
  const progression = makeProgression(commonDifference, initialTerm, progressionLength);
  const hiddenTermPosition = getRandomInt(0, progressionLength - 1);
  const answer = progression[hiddenTermPosition];
  const question = progression.map((value, index) => ((index === hiddenTermPosition) ? '..' : value)).join(' ');
  return [question, answer.toString()];
};

export default () => processGame(generateData, gameDescription);
