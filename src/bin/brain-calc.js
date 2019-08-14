#!/usr/bin/env node

import { greeting } from '..';
import { gameProcess, getRandomInt } from '../core';

const rule = 'What is the result of the expression?';
const username = greeting(rule);

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

gameProcess(generateData, username);
