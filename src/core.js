import readlineSync from 'readline-sync';

const winsCount = 3;

export default (generateData, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);

  const counter = (gameAttemptsCount) => {
    if (gameAttemptsCount >= winsCount) {
      console.log(`Congratulations, ${username}`);
      return;
    }
    const [question, answer] = generateData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
      counter(gameAttemptsCount + 1);
      return;
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}`);
    console.log(`Let's try again, ${username}`);
  };
  counter(0);
};
