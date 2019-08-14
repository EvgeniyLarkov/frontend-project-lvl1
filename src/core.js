import readlineSync from 'readline-sync';

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


const gameProcess = (generateData, username, tryNum = 0) => {
  if (tryNum >= tryToWin) {
    return console.log(`Congratulations, ${username}`);
  }
  const [question, answer] = generateData();
  if (gameBody(answer, question, username)) {
    return gameProcess(generateData, username, tryNum + 1);
  }
  return console.log(`Let's try again, ${username}`);
};


const getRandomInt = (min = minVal, max = maxVal) => {
  const random = Math.floor(Math.random() * (max + 1 - min)) + min;
  return random;
};

export { gameProcess, getRandomInt };
