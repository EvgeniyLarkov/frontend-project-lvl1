#!/usr/bin/env node

import { greeting, askName } from '..';
import { gameBody, getRandomInt, tryToWin } from '../core';

greeting();

const username = askName();

console.log('What number is missing in the progression?');

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
  const progLength = 9;
  const progSeed = getRandomInt(1);
  const progression = makeProgression(progLength, progSeed);
  const numberPos = getRandomInt(0, progLength);
  const answer = progression[numberPos];
  const question = progression.map(val => ((val === answer) ? '..' : val)).join(' ');
  return [question, answer.toString()];
};

const gameProcess = (tryNum = 0) => {
  if (tryNum >= tryToWin) {
    return console.log(`Congratulations, ${username}`);
  }
  const [question, answer] = generateData();
  if (gameBody(answer, question, username)) {
    return gameProcess(tryNum + 1);
  }
  return false;
};

gameProcess();
