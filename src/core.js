import readlineSync from 'readline-sync';

const winAttempt = 3;

export default (generateData, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);

  const iter = (gameAttempt) => {
    if (gameAttempt >= winAttempt) {
      return `Congratulations, ${username}`;
    }
    const [question, answer] = generateData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
      return iter(gameAttempt + 1);
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}`);
    return `Let's try again, ${username}`;
  };
  console.log(iter(0));
};
