#!/usr/bin/env node

import { greeting, askName } from '..';
import { gameBody, getRandomInt, tryToWin } from '../core';

greeting();
const username = askName();
console.log('Find the greatest common divisor of given numbers.');

const getGCD = (val1, val2) => ((val2 === 0) ? val1 : getGCD(val2, val1 % val2));

const generateData = () => {
  const randomVal1 = getRandomInt();
  const randomVal2 = getRandomInt();
  return [`${randomVal1} ${randomVal2}`, getGCD(randomVal1, randomVal2).toString()];
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
