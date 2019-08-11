#!/usr/bin/env node

import { greeting, askName } from '..';
import { gameBody, getRandomInt, tryToWin } from '../core';

greeting();

const username = askName();

console.log('Answer "yes" if number even otherwise answer "no"');

const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');

const gameProcess = (tryNum = 0) => {
  if (tryNum >= tryToWin) {
    return console.log(`Congratulations, ${username}`);
  }
  const randomVal = getRandomInt();
  const evenCheck = isEven(randomVal);
  if (gameBody(evenCheck, randomVal, username)) {
    return gameProcess(tryNum + 1);
  }
  return gameProcess(tryNum);
};

gameProcess();
