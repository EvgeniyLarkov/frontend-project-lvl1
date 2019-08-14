#!/usr/bin/env node

import { greeting, askName } from '..';
import { gameBody, getRandomInt, tryToWin } from '../core';

greeting();
const username = askName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  const numsqrt = Math.sqrt(num);
  const iter = (divider = 2) => {
    if (numsqrt <= divider) {
      return 'yes';
    }
    if (num % divider === 0) {
      return 'no';
    }
    return iter(divider + 1);
  };
  return iter();
};

const generateData = () => {
  const randomVal = getRandomInt(2);
  return [randomVal, isPrime(randomVal)];
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
