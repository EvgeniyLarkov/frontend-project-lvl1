#!/usr/bin/env node

import { greeting } from '..';
import { gameProcess, getRandomInt } from '../core';

const rule = 'Find the greatest common divisor of given numbers.';
const username = greeting(rule);

const getGCD = (val1, val2) => ((val2 === 0) ? val1 : getGCD(val2, val1 % val2));

const generateData = () => {
  const randomVal1 = getRandomInt();
  const randomVal2 = getRandomInt();
  return [`${randomVal1} ${randomVal2}`, getGCD(randomVal1, randomVal2).toString()];
};

gameProcess(generateData, username);
