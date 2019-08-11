#!/usr/bin/env node

import { greeting, askName } from '..';
import { gameBody, getRandomInt, tryToWin } from '../core';

greeting();
const username = askName();
console.log('What is the result of the expression?');

const mathSymb = [
  ['+', (var1, var2) => var1 + var2],
  ['-', (var1, var2) => var1 - var2],
  ['*', (var1, var2) => var1 * var2],
];

const generateData = () => {
  const [symbol, operation] = mathSymb[getRandomInt(0, mathSymb.length - 1)];
  const randomVal1 = getRandomInt();
  const randomVal2 = getRandomInt();
  return [`${randomVal1} ${symbol} ${randomVal2}`, operation(randomVal1, randomVal2).toString()];
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
