import readlineSync from 'readline-sync';

const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
  return username;
};

const greeting = (gameRule) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRule);
  return askName();
};

export { askName, greeting };
