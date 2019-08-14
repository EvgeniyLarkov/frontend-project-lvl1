#!/usr/bin/env node

import { greeting } from '..';
import { gameProcess, getRandomInt } from '../core';

const rule = 'Answer "yes" if number even otherwise answer "no"';
const username = greeting(rule);

const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');

const generateData = () => {
  const randomVal = getRandomInt();
  return [randomVal.toString(), isEven(randomVal)];
};

gameProcess(generateData, username);
