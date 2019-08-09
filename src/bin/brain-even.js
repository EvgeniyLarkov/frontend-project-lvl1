#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greeting, askName } from '..';

greeting();

const username = askName();
const numOfCorrectAnswers = 3;
const minVal = 0;
const maxVal = 20;

console.log('Answer "yes" if number even otherwise answer "no"');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');

function gameBody() {
  const randomVal = getRandomInt(minVal, maxVal);
  console.log(`Question: ${randomVal}`);
  const getAnswer = readlineSync.question('Your answer: ');
  const evenCheck = isEven(randomVal);
  if (evenCheck === getAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${getAnswer} is wrong answer ;(. Correct answer was ${evenCheck}`);
  console.log(`Let's try again, ${username}`);
  return false;
}

const gameProcess = () => {
  let numOfAnswers = 0;
  while (numOfAnswers < numOfCorrectAnswers) {
    if (gameBody()) {
      numOfAnswers += 1;
    }
  }
  console.log(`Congratulations, ${username}`);
};

gameProcess();
