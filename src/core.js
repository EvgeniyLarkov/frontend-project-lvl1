import readlineSync from 'readline-sync';
import { greeting } from '.';

const minVal = 0;
const maxVal = 20;
const tryToWin = 3;

const gameBody = (correctAnswer, question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  return false;
};


const gameProcess = (generateData, rule) => {
  const username = greeting(rule);
  const iter = (tryNum) => {
    if (tryNum >= tryToWin) {
      return console.log(`Congratulations, ${username}`);
    }
    const [question, answer] = generateData();
    if (gameBody(answer, question)) {
      return iter(tryNum + 1);
    }
    return console.log(`Let's try again, ${username}`);
  };
  return iter(0);
};


const getRandomInt = (min = minVal, max = maxVal) => {
  const random = Math.floor(Math.random() * (max + 1 - min)) + min;
  return random;
};

export { gameProcess, getRandomInt };
