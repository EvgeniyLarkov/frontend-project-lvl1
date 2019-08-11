import readlineSync from 'readline-sync';

const minVal = 0;
const maxVal = 20;
const tryToWin = 3;

const gameBody = (correctAnswer, question, username) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  console.log(`Let's try again, ${username}`);
  return false;
};

const getRandomInt = (min = minVal, max = maxVal) => {
  const random = Math.floor(Math.random() * (max + 1 - min)) + min;
  return random;
};

export { gameBody, getRandomInt, tryToWin };
