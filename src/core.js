import readlineSync from 'readline-sync';

const minVal = 0;
const maxVal = 20;
const tryToWin = 3;

const greeting = (gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  return username;
};

const gameProcess = (generateData, gameDescription) => {
  const username = greeting(gameDescription);
  const iter = (tryNum) => {
    if (tryNum >= tryToWin) {
      return console.log(`Congratulations, ${username}`);
    }
    const [question, answer] = generateData();
    const gameBody = (gameQuestion, correctAnswer) => {
      console.log(`Question: ${gameQuestion}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (correctAnswer === userAnswer) {
        console.log('Correct!');
        return true;
      }
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return false;
    };

    if (gameBody(question, answer)) {
      return iter(tryNum + 1);
    }
    console.log(`Let's try again, ${username}`);
    return false;
  };
  return iter(0);
};


const getRandomInt = (min = minVal, max = maxVal) => {
  const random = Math.floor(Math.random() * (max + 1 - min)) + min;
  return random;
};

export { gameProcess, getRandomInt, greeting };
